const moongoose = require("mongoose");

const products = new moongoose.Schema({
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

module.exports = moongoose.model("Products", products);
