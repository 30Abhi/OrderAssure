import OrderCustomer from "../schema/orderSchema.js";
import { v4 as uuidv4 } from 'uuid'; 
export const placeOrderService = async ({ customerId, items }) => {
    try {
        const orderId = uuidv4(); 
        const order = await OrderCustomer.create({ orderId, customerId, items });
        return order;
    } catch (error) {
        throw error;
    }
}