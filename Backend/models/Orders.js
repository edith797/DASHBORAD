const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true }, // Order ID
    customer: {
        type: String,
        required: true,
    },
    products: {
        type: [String], // Array of product names or IDs
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Delivered'],
        default: 'Pending',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
