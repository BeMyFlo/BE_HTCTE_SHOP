import userRouter from "../modules/user/user.routes.js";
import productRouter from "../modules/product/product.routes.js";

const useRoutes = (app) => {
  app.use("/api/product", productRouter);
};

export default useRoutes;
