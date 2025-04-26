import { Router } from "express";
import * as Product from "./controllers/product.controller.js";
import checkLogin from "../../middlewares/checkLogin.js";
import checkAdmin from "../../middlewares/checkAdmin.js";
// import { upload } from "../../services/upload.js";
const router = new Router();

router.post("/product/create",
    //  upload.single("image"), 
    Product.createProduct);
router.get("/product", Product.getListProduct);
router.route("/product/:category").get(Product.getListProductByCategory);
router.route("/productById/:product").get(Product.getProductById);
router.route("/productDelete/:product").delete(Product.deleteProductById);
router.route("/productUpdate/:product").put(Product.updateProductById);
router.route("/productHot").get(Product.getListProductHot);
router.put('/product/UpdateViewProduct/:product', Product.UpdateViewProduct);
router.get('/FeaturedProduct', Product.getListFeaturedProduct)

export default router;
