const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes'); 

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/orders', orderRoutes); // Attach order routes
app.use('/api/products', productRoutes); // Attach product routes

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
