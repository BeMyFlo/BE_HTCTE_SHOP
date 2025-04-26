import OrderService from "../services/order.services.js";

export const createOrder = async (req, res) => {
    try {
        const { cartItems } = req.body;

        if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
            return res.status(400).json({ success: false, message: "No products in cart", code: 1 });
        }

        const order = {
            // user: req.user._id,
            user: '68079fb33f54a124ff111e2a',
            products: cartItems.map(item => ({
                productId: item._id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity
            })),
            totalAmount: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        };

        const newOrder = await OrderService.createOrder(order);

        res.status(200).json({ success: true, data: newOrder, code: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message, code: 1 });
    }
};
