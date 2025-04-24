// import { ProductModel } from "../models/product.js";

// const create = async (data) => {
//   try {
//     const product = await ProductModel.create(data);
//     return product;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const getAllProducts = async () => {
//   try {
//     const products = await ProductModel.find({});
//     return products;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const findByCategory = async (category) => {
//   try {
//     const products = await ProductModel.find({ category });
//     return products;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const findById = async (id) => {
//   try {
//     const product = await ProductModel.findById(id);
//     if (!product) {
//       throw new Error("Product not found");
//     }
//     return product;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const ProductRepository = {
//   create,
//   find,
//   findById,
// };

// export default ProductRepository;
