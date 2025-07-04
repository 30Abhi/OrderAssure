import mongoose from "mongoose";

const orderPickerSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  pickerId: { type: String },
  holdReason: { type: String },
  approvalRequestedAt: { type: Date },
  status: { type: String } // e.g.,  
});

const OrderPicker= mongoose.model('OrderPicker', orderPickerSchema, 'orders');
export default OrderPicker;