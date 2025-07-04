import { Router } from "express";
import { placeOrderController } from "../controller/placeOrderController.js";
import { getOrderController } from "../controller/getOrderController.js";


const router=Router();

router.get('/',(req,res)=>{
    console.log('API ROUTER CALLED SUCCESFULLY');
    return res.json({
        message:'api router',
    })
})

router.post('/placeOrder',placeOrderController);
router.get('/orderStatus',getOrderController);

export default router;