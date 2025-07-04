import OrderPicker from "../schema/orderSchema.js";

export const getOrderService = async (pickerId) => {
    try {
        // Find the first unassigned, uncompleted order and assign pickerId
        const order = await OrderPicker.findOneAndUpdate(
            { status: { $ne: "COMPLETED" }, pickerId: { $in: [null, undefined, ""] } },
            { pickerId, status: "ASSIGNED" }, 
            { new: true }
        );
        return order;
    } catch (error) {
        throw error;
    }
};