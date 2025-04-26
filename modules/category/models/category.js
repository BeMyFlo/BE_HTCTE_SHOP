// models/category.model.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export const CategoryModel = mongoose.model("Category", categorySchema);
