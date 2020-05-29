const mongoose = require("mongoose");

const customer = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    comment: {
        type: String,
    },
    category: {
        type: String,
    },
    size: {
        type: String,
    },
    status: {
        type: Boolean,
    },
});

module.exports = mongoose.model("Customer", customer);