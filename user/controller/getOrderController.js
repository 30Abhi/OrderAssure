import { getOrderService } from "../service/getOrderService.js";

export const getOrderController = async (req, res) => {
    try {
        // Expecting req.body to have: { customerId: "...", items: [...] }
        const { customerId } = req.body;

        console.log("customerId:", customerId);
       

        const response = await getOrderService(customerId);

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