import { Router } from "express";
import { getOrderController } from "../controller/getOrderController.js";
import { changeRequestController } from "../controller/changeRequestController.js";
import { checkStatusController } from "../controller/checkStatus.js";

const router=Router();


router.get('/getOrder',getOrderController);
router.put('/changeRequest',changeRequestController);
router.get('/checkStatus',checkStatusController);

export default router;