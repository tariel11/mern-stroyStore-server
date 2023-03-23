import Router from "express";
import {
    getAllPoducts,
    getOneProduct,
} from "../controller/productController.js";
const router = new Router();

router.get("/getall", getAllPoducts);
router.get("/getone", getOneProduct);

export default router;
