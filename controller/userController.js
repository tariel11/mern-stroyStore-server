import ApiError from '../error/ApiError.js'; 

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserSchema from '../models/userModel.js'

const generateJwt = (id) => {
  return jwt.sign(
      { _id: id},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  )
}

export const userRegistration = async (req, res, next) => {
  try {
    const {email, password, name } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }

    const candidate = await UserSchema.findOne({email: email})
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserSchema({
      name,
      email,
      passwordHash: hash,
    });

    const user = await doc.save();


    const token = generateJwt({_id: user._id})

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось зарегистрироваться',
    });
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });

    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return next(ApiError.internal('Неверный логин или пароль'))
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '30d',
      },
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось авторизоваться',
    });
  }
};

export const userCheck = async (req, res, next) => {
  const token = generateJwt(req.user._id)
  return res.json({token})
}