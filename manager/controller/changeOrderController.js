import { changeOrderService } from "../service/changeOrderService.js";


export const changeOrderController = async (req, res) => {
    try {

        const response = await changeOrderService();

        console.log("Orders changed ---> ", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'orders changed successfully',
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