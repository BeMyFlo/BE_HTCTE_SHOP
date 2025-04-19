import { Router } from "express";
import * as Product from "./controllers/product.controller.js";
import checkLogin from "../../middlewares/checkLogin.js";
import checkAdmin from "../../middlewares/checkAdmin.js";
import { upload } from "../../services/upload.js";
const router = new Router();

router
  .route("/product/create")
  .post(upload.single("image"), Product.createProduct);
router.route("/product/").get(Product.getListProduct);
router.route("/product/:category").get(Product.getListProductByCategory);

export default router;
