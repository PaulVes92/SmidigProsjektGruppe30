const mongoose = require("mongoose");

const rent = new mongoose.Schema({
  productId: {
    type: Number,
  },
  productName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  rentedDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Utleie", rent);
