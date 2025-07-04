import OrderCustomer from "../schema/orderSchema.js";

export const getOrderService = async (customerId) => {
    try {
        const order = await OrderCustomer.findOne({ customerId });
        return order;
    } catch (error) {
        throw error;
    }
};