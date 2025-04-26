import dotenv from "dotenv";
dotenv.config();

export default {
  secret: process.env.JWT,
  expiresIn: process.env.JWT_EXPIRES_IN || "1d",
};
