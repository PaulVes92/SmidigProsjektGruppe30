const express = require("express");
const connectDB = require("./db/connection");

app = express();

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Started server on port " + port);
});
