const mongoose = require("mongoose");

const reciepts = new mongoose.Schema({
  orderNumber: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Reciepts", reciepts);
