import { getchangeRequestService } from "../service/getchangeRequestService.js";

export const getchangeRequestController = async (req, res) => {
    try {

        const response = await getchangeRequestService();

        console.log("Orders on Hold ---> ", response);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'orders on hold fetched successfully',
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