import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../modules/user/models/user.js";
import jwtConfig from "../config/jwt.js";  

// Đăng ký
const register = async ({ phone, password, email }) => {
  const existingUser = await UserModel.findOne({ $or: [{ phone }, { email }] });
  if (existingUser) {
    throw new Error("Số điện thoại hoặc email đã tồn tại!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserModel.create({
    phone,
    password: hashedPassword,
    email, 
  });

  return {
    message: "Đăng ký thành công!",
    user: {
      id: newUser._id,
      phone: newUser.phone,
      email: newUser.email, 
    },
  };
};

// Đăng nhập
const login = async ({ phone, password }) => {
  const user = await UserModel.findOne({ phone });
  if (!user) {
    throw new Error("Số điện thoại không tồn tại!");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Mật khẩu không đúng!");
  }

  // Tạo token JWT
  const token = jwt.sign(
    { id: user._id, phone: user.phone, email: user.email },  
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );

  return {
    message: "Đăng nhập thành công!",
    token,
    user: {
      id: user._id,
      phone: user.phone,
      email: user.email,  
    },
  };
};

export default {
  register,
  login,
};
