import { placeOrderService } from "../service/placeOrderService.js";

export const placeOrderController = async (req, res) => {
    try {
        // Expecting req.body to have: { customerId: "...", items: [...] }
        const { customerId, items } = req.body;

        console.log("customerId:", customerId);
        console.log("items:", items);

        const response = await placeOrderService({
            customerId,
            items,
            
        });

        console.log("Order Details---> ", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'order placed successfully',
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