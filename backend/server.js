const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const orderRoutes = require('./routes/orderRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const { errorHandler } = require('./middlewares/errorHandler.js');

const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());          // Enable CORS

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use(errorHandler);
console.log(process.env.MONGO_URI);  // This should log the MongoDB URI

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
