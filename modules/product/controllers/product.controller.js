import e from "express";
import ProductRepository from "../repository/product.repository.js";
// import Category from "../../category/models/category.js";
// import { uploadImageToFirebase } from "../../../services/uploadImage.js";

export const getListProduct = async (req, res) => {
  try {
    const products = await ProductRepository.getAllProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getListProductByCategory = async (req, res) => {
  try {
    const products = await ProductRepository.findByCategory(
      req.params.category
    );
    if (!products) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    // if (!req.file) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "No image uploaded", code: 2 });
    // }

    // const imageUrl = await uploadImageToFirebase(req.file);

    const product = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      sales: req.body.sales,
      views: req.body.views,
      availability: req.body.availability,
      badge: req.body.badge
    };

    const newProduct = await ProductRepository.create(product);

    res.status(200).json({ success: true, data: newProduct, code: 0 });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message, code: 1 });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductRepository.findProductById(req.params.product);
    if (!product) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, code: 0, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const deleteProductById = async (req, res) => {
  try {
    const product = await ProductRepository.findProductById(req.params.product);
    if (!product) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    await ProductRepository.deleteProductById(req.params.product);
    res.status(200).json({ success: true, code: 0, message: "Delete successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const updateProductById = async (req, res) => {
  try {
    const product = await ProductRepository.findProductById(req.params.product);
    if (!product) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    const updatedProduct = await ProductRepository.updateProductById(req.params.product, req.body);
    res.status(200).json({ success: true, code: 0, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getListProductHot = async (req, res) => {
  try {
    const hotProducts = await ProductRepository.getListProductHot();
    if (!hotProducts) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.status(200).json({ success: true, data: hotProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const UpdateViewProduct = async (req, res) => {
  try {
    const product = await ProductRepository.UpdateViewProduct(req.params.product);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {

  }
}

export const getListFeaturedProduct = async (req, res) => {
  try {
    const products = await ProductRepository.getListFeaturedProduct();
    if (!products) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
    res.json({ success: true, data: products });
  } catch (error) {

  }
}
