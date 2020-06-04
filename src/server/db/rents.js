const mongoose = require("mongoose");

const rent = new mongoose.Schema({
  rentedDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kunder",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produkter",
    required: true,
  },
});

module.exports = mongoose.model("Utleie", rent);
