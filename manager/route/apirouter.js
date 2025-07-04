import { Router } from "express";
import { getchangeRequestController } from "../controller/getchangeRequestController.js";
import { changeOrderController } from "../controller/changeOrderController.js";

const router=Router();


router.get('/getchangeRequest',getchangeRequestController);
router.put('/changeOrder',changeOrderController);

export default router;