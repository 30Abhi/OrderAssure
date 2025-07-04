import OrderPicker from "../schema/orderSchema.js";

export const changeRequestService = async ({ orderId, pickerId, holdReason }) => {
    try {
        const updatedOrder = await OrderPicker.findOneAndUpdate(
            { orderId, pickerId },
            {
                holdReason,
                approvalRequestedAt: new Date(),
                status: "ON_HOLD"
            },
            { new: true }
        );
        return updatedOrder;
    } catch (error) {
        throw error;
    }
}