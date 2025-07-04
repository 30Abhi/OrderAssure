import OrderManager from "../schema/orderSchema.js";

export const getchangeRequestService = async (  ) => {
    try {
    const onHoldOrders = await OrderManager.find({  status: { $in: "ON_HOLD" } });     
    console.log("onHoldOrders--->",onHoldOrders);   
    return onHoldOrders;
    } catch (error) {
        throw error;
    }
}

