import express from "express";
import { findProductsHandler } from "../controller/product.controller";

const router = express.Router();

router.get("/products", findProductsHandler);

export default router;
