import { Router } from "express";
import * as Order from "./controllers/order.controllers.js";
// import { upload } from "../../services/upload.js";
const router = new Router();

router.post("/order/create",
    //  upload.single("image"), 
    Order.createOrder);

export default router;
