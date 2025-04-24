import express from "express";
import authService from "../services/auth.service.js";

const router = express.Router();

// Route đăng ký
router.post("/register", async (req, res) => {
  try {
    const { phone, password, email } = req.body;  
    const result = await authService.register({ phone, password, email });
    res.status(201).json({
      message: "Đăng ký thành công!",
      user: result.user,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route đăng nhập
router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body;
    const result = await authService.login({ phone, password });
    res.status(200).json({
      message: result.message,
      token: result.token,
      user: result.user,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default router;
