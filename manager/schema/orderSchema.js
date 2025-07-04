const mongoose = require('mongoose');

const orderManagerSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  managerId: { type: String },
  managerApproval: { type: String, enum: ["PENDING", "APPROVED", "CANCELLED"] ,default:"PENDING" },
  managerNote: { type: String },
  pickerId: { type: String },
  holdReason: { type: String },
  approvalRequestedAt: { type: Date },
  items: [
    {
      productId: String,
      qty: Number
    }
  ],
  customerId: { type: String },
  status: { type: String } // OH_HOLD , CANCELLED , ASSIGNED 
});

const OrderManager= mongoose.model('OrderManager', orderManagerSchema, 'orders');

export default OrderManager;