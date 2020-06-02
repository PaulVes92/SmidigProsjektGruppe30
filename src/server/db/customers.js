const mongoose = require("mongoose");

const customers = new mongoose.Schema({
  customerId: {
    type: Number,
  },
  firstName: {
    type: String,
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
  address: {
    type: String,
  },
});

module.exports = mongoose.model("kunder", customers);
