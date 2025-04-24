// import ProductRepository from "../repository/product.repository.js";
// // import Category from "../../category/models/category.js";
// // import { uploadImageToFirebase } from "../../../services/uploadImage.js";

// export const getListProduct = async (req, res) => {
//   try {
//     const products = await ProductRepository.getAllProducts();
//     res.status(200).json({ success: true, data: products });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export const getListProductByCategory = async (req, res) => {
//   try {
//     const products = await ProductRepository.findByCategory(
//       req.params.category
//     );
//     if (!products) {
//       return res.status(404).json({ success: false, message: "Not found" });
//     }
//     res.status(200).json({ success: true, data: products });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export const createProduct = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res
//         .status(400)
//         .json({ success: false, message: "No image uploaded" });
//     }

//     const imageUrl = await uploadImageToFirebase(req.file);

//     const product = {
//       name: req.body.name,
//       origin: req.body.origin,
//       price: req.body.price,
//       prevention: req.body.prevention,
//       image: imageUrl,
//       category: req.body.category,
//       link: req.body.link,
//     };

//     const newProduct = await ProductRepository.create(product);

//     res.status(200).json({ success: true, data: newProduct });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
