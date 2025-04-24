import authRouter from "./auth.router.js";
// import productRouter from "../modules/product/product.routes.js";

const useRoutes = (app) => {
  app.use("/api/auth", authRouter); 
  // app.use("/api/product", productRouter);
};

export default useRoutes;
