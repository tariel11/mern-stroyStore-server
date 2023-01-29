import dotenv from 'dotenv'
import express  from'express';
import mongoose from'mongoose';
import cors from 'cors'
import fileUpload from 'express-fileupload';
import path from 'path';
import * as url from 'url';

import {errorHandler} from './middleware/ErrorHandlingMiddleware.js'
import routes from './routes/index.js'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

dotenv.config()
const port = process.env.PORT || 1111

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL) 
  .then(()=> console.log('db ok'))
  .catch((e)=> console.log('db error', e))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(express.json())
app.use(cors())
app.use('/api', routes)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server ok ${process.env.PORT}`)
})
