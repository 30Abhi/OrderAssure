// serverA/models/OrderCustomer.js
import mongoose from "mongoose";

const orderCustomerSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  customerId: { type: String, required: true },
  
  items: [
    {
      productId: String,
      qty: Number
    }
  ],
  status: { type: String, default: "PLACED" },
  createdAt: { type: Date, default: Date.now }
});

const OrderCustomer = mongoose.model('OrderCustomer', orderCustomerSchema, 'orders');
export default OrderCustomer;