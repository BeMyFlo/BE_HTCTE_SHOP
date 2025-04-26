import { Router } from "express";
import * as Favorite from "./controllers/favorite.controller.js";
// import { upload } from "../../services/upload.js";
const router = new Router();

router.post("/favorite/create",
    //  upload.single("image"), 
    Favorite.createFavorite);

export default router;
