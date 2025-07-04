import OrderPicker from "../schema/orderSchema.js";

export const checkStatusService = async ( pickerId ) => {
    try {
    const currStatus = await OrderPicker.find({ pickerId, status: { $ne: "COMPLETED" } });     
    console.log("currstatus--->",currStatus);   
    return currStatus;
    } catch (error) {
        throw error;
    }
}

export default checkStatusService;