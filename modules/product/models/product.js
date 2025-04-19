import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    prevention: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", schema);