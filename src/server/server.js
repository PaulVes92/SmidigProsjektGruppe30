const express = require("express");
const connectDB = require("./db/connection");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.json());

//Import routes

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Started server on port " + port);
});
