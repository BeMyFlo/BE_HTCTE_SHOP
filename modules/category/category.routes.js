import { Router } from "express";
import * as Category from "./controllers/category.controllers.js";
import checkLogin from "../../middlewares/checkLogin.js";
import checkAdmin from "../../middlewares/checkAdmin.js";
// import { upload } from "../../services/upload.js";
const router = new Router();

router.post("/category/create",
    //  upload.single("image"), 
    Category.createCategory);
// router.get("/category", Category.getListCategory);
// router.route("/product/:category").get(Product.getListProductByCategory);

export default router;
