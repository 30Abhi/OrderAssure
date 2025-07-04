import { getOrderService } from "../service/getOrderService.js";


export const getOrderController = async (req, res) => {
    try {

        const {pickerId}=req.body ;

        const response = await getOrderService(pickerId);

        console.log("Order Details---> ", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'order data fetched successfully',
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