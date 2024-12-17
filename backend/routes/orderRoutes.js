const express = require('express');
const { createOrder, getOrders, updateOrderStatus } = require('../controllers/orderController.js');
const { verifyToken } = require('../middlewares/authMiddleware.js');
const multer = require('multer');
const upload = require('../utils/fileUpload.js');

const router = express.Router();

// Create an order with file upload
router.post('/', upload.single('document'), createOrder);

// Get all orders
router.get('/', verifyToken, getOrders);

// Update order status
router.put('/status', verifyToken, updateOrderStatus);

module.exports = router;
