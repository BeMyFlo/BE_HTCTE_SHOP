import multer from "multer";

// Khởi tạo storage trước
const storage = multer.memoryStorage();

// Sau đó mới tạo upload
const upload = multer({ storage });

export { upload };
