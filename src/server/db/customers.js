const mongoose = require("mongoose");

const customers = new mongoose.Schema({
  id: {
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

module.exports = mongoose.model("Customers", customers);
