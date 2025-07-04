import OrderManager from "../schema/orderSchema.js";


export const changeOrderService = async ({ orderId, managerId, items, status, managerNote }) => {
    try {
        const updatedOrder = await OrderManager.findOneAndUpdate(
            { orderId },
            {
                items, // updated items after consulting customer
                status, // new status, CHANGE OH_HOLD to ASSIGNED or CANCELLED
                managerId,
                managerApproval: status, // should be "APPROVED" or "CANCELLED"
                managerNote
            },
            { new: true }
        );
        return updatedOrder;
    } catch (error) {
        throw error;
    }
};

