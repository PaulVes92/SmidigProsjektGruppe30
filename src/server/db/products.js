const mongoose = require("mongoose");

const products = new mongoose.Schema({
  productId: {
    type: Number,
  },
  productName: {
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

module.exports = mongoose.model("Produkter", products);
