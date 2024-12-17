const Order = require('../models/Order.js');
const { sendEmail } = require('../utils/emailService.js');
const { upload } = require('../utils/fileUpload.js');

// Create Order
const createOrder = async (req, res) => {
  try {
    const { email, printDetails } = req.body;

    if (!email || !printDetails) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const order = new Order({
      email,
      documentPath: req.file.path,  // File path after upload
      printDetails,
    });

    await order.save();

    // Send confirmation email
    sendEmail(email, 'Order Confirmation', 'Your print order has been placed.');

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Order Status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    // Send email notification when the order is completed
    if (status === 'completed') {
      sendEmail(order.email, 'Order Completed', 'Your print order has been completed.');
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createOrder, getOrders, updateOrderStatus };
