import express from "express";
import bodyParser from "body-parser";
import useDatabase from "./services/database.js";
import * as dotenv from "dotenv";
import useRoutes from "./routers/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

useDatabase();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

useRoutes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`🚀 Bpool is running on http://localhost:${PORT}`);
  } else {
    console.error("❌ Server failed to start:", error);
  }
});
