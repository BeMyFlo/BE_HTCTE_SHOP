import { OrderModel } from "../models/Order.models.js";

const createOrder = async (data) => {
    try {
        const order = await OrderModel.create(data);
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};



const orderService = {
    createOrder,
    //   find,
    //   findById,
};

export default orderService;