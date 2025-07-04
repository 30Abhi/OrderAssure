import { changeRequestService } from "../service/changeRequestService.js";

export const changeRequestController = async (req, res) => {
    try {
        // Get data from request body
        const { orderId, pickerId, holdReason } = req.body;

        const response = await changeRequestService({ orderId, pickerId, holdReason });

        console.log("Order Status---> ", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'order change request made to manager successfully',
        });

    } catch (error) {
        console.log(error);
        if (error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false,
            });
        }
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};