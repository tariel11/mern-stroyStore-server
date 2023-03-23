import ProductSchema from "../models/productModel.js";
import slug from "slug";

// POST CREATE MANY
export const createManyProducts = async (req, res) => {
    try {
        req.body.map((obj) => {
            const doc = new ProductSchema({
                title: obj.title,
                slug: slug(obj.title),
                article: obj.article,
                price: obj.price,
                oldPrice: obj.oldPrice,
                category: obj.category,
                img: obj.img,
                cardInfo: obj.cardInfo,
                description: obj.description,
                sales: obj.sales,
                brand: obj.brand,
                outStock: obj.outStock,
            });
            const product = doc.save();
        });

        res.json({ message: "success" });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось создать статью",
        });
    }
};

const PAGE_SIZE = 12;

// GET ALL : category, brand, searchQuery, sales
export const getPoducts = async (req, res) => {
    try {
        const { category, brand, searchQuery, sales } = req.query;
        let products = [];

        if (category) {
            products = await ProductSchema.find({ category });
        }
        if (brand) {
            products = await ProductSchema.find({ brand });
        }
        if (sales) {
            products = await ProductSchema.find({ sales });
        }
        res.json(products);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось получить товары",
        });
    }
};

export const getAllPoducts = async (req, res) => {
    try {
        const { query } = req;
        const pageSize = query.pageSize || PAGE_SIZE;
        const page = query.page || 0;
        const order = query.order || "";
        const searchQuery = query.query;
        const categoryQuery = query.category;

        let queryFilter;

        if (categoryQuery) {
            queryFilter = {
                category: {
                    $regex: categoryQuery,
                    $options: "i",
                },
            };
        }

        if (searchQuery) {
           queryFilter = {
            title: {
                $regex: searchQuery,
                $options: "i",
            },
          };
      }

        const sortOrder =
            order === "alphabet"
                ? { title: 1 }
                : order === "lowest"
                ? { price: 1 }
                : order === "highest"
                ? { price: -1 }
                : { _id: -1 };

        const products = await ProductSchema.find({
            ...queryFilter,
        })
            .sort(sortOrder)
            .skip(pageSize * (+page - 1))
            .limit(pageSize);

        const countProducts = await ProductSchema.countDocuments({
            ...queryFilter,
        });
        res.send({
            products,
            countProducts,
            page,
            pages: Math.ceil(countProducts / pageSize),
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось получить товары",
        });
    }
};

// GET SEARCH
export const getSearchProducts = async (req, res) => {
    try {
        const { query } = req;
        const pageSize = query.pageSize || PAGE_SIZE;
        const page = query.page || 0;
        const order = query.order || "";
        const searchQuery = query.query || "";

        const queryFilter =
            searchQuery && searchQuery !== "all"
                ? {
                      title: {
                          $regex: searchQuery,
                          $options: "i",
                      },
                  }
                : {};

        const sortOrder =
            order === "alphabet"
                ? { title: 1 }
                : order === "lowest"
                ? { price: 1 }
                : order === "highest"
                ? { price: -1 }
                : { _id: -1 };

        const products = await ProductSchema.find({
            ...queryFilter,
        })
            .sort(sortOrder)
            .skip(pageSize * (+page - 1))
            .limit(pageSize);

        const countProducts = await ProductSchema.countDocuments({
            ...queryFilter,
        });
        res.send({
            products,
            countProducts,
            page,
            pages: Math.ceil(countProducts / pageSize),
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось получить товары",
        });
    }
};

// GET ONE : slug, productArt
export const getOneProduct = async (req, res) => {
    try {
        const { slug, productArt } = req.query;
        let product;
        if (slug) {
            product = await ProductSchema.findOne({ slug });
        }
        if (productArt) {
            product = await ProductSchema.findOne({ article: productArt });
        }
        res.json(product);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось получить товар",
        });
    }
};

// PUT UODATE PRODUCT
export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await ProductSchema.findById(productId);
        if (product) {
            product.title = req.body.title;
            product.slug = slug(req.body.title);
            product.price = req.body.price;
            product.oldPrice = req.body.oldPrice;
            product.article = req.body.article;
            product.description = req.body.description;
            product.cardInfo = req.body.cardInfo;
            product.sales = req.body.sales;
            product.brand = req.body.brand;
            product.outStock = req.body.outStock;
            await product.save();
            res.send({ message: "Товар обновлен", product });
        } else {
            res.status(404).send({ message: "Товар не найден" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось обновить товар",
        });
    }
};
