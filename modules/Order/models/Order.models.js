import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                name: String,
                price: Number,
                quantity: Number,
                totalPrice: Number,
            }
        ],
        totalAmount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'paid', 'shipped', 'delivered'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

export const OrderModel = mongoose.model('Order', orderSchema);
