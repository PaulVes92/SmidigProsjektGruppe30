const moongoose = require("mongoose");

const user = new moongoose.Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});
