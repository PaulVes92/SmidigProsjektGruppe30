const mongoose = require("mongoose");

const rent = new mongoose.Schema({
  rentedDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Utleie", rent);
