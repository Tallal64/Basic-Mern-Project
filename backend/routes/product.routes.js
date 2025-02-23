import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controllers.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.delete("/:Id", deleteProduct);
router.put("/:Id", updateProduct);

export default router;
