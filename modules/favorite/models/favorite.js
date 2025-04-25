import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    { timestamps: true }
);

export const FavoriteModel = mongoose.model("Favorite", schema);