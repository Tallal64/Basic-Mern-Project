import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(404)
      .json({ success: false, message: "all feilds are required" });
  }

  const newProduct = await Product.create({
    name,
    price,
    image,
  });

  return res.status(200).json({
    success: true,
    message: "product created successfully",
    newProduct: newProduct,
  });
};

export const getAllProducts = async (_, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error(error.message);
    return res
      .status(404)
      .json({ success: false, message: "product not found" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { Id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(Id)) {
      return res
        .status(404)
        .json({ success: false, message: "invalid product id" });
    }

    await Product.findByIdAndDelete(Id);

    return res
      .status(200)
      .json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "product does not exists" });
  }
};

export const updateProduct = async (req, res) => {
  const { Id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(Id, product, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "product updated successfully",
      updatedData: updatedProduct,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(404).json({
      success: false,
      message: "something went wrong when updated the product",
    });
  }
};
