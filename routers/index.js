// import userRouter from "../modules/user/user.routes.js";
import productRouter from "../modules/product/product.routes.js";
import categoryRouter from "../modules/category/category.routes.js";
import favoriteRouter from "../modules/favorite/favorite.routers.js";

const useRoutes = (app) => {
  app.use("/api/product", productRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/favorite", favoriteRouter);
};

export default useRoutes;
