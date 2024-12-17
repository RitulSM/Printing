const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  documentPath: { type: String, required: true },
  printDetails: { type: String, required: true },
  status: { type: String, default: 'pending' },  // 'pending', 'completed'
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
