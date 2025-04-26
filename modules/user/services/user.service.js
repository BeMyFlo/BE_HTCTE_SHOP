import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";
import jwtConfig from "../../../config/jwt.js";  

// Đăng ký
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const register = async ({ phone, password, email }) => {
  const conditions = [{ phone }];

  if (email && email.trim() !== '') {
    conditions.push({ email });
  }  

  const existingUser = await UserModel.findOne({ $or: conditions });
  if (existingUser) {
    throw new Error("Số điện thoại hoặc email đã tồn tại!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await UserModel.create({
    phone,
    password: hashedPassword,
    email: email || undefined, 
  });

  return {
    message: "Đăng ký thành công!",
    user: {
      id: newUser._id,
      phone: newUser.phone,
      email: newUser.email || null, 
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
