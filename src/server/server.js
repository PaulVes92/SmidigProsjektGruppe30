const express = require("express");
const connectDB = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");

//Middleware
app = express();
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("HOME");
});

//Import routes
const products = require("./routes/product");
const customers = require("./routes/customer");
const reciepts = require("./routes/reciept");
const rents = require("./routes/rent");

app.use("/products", products);
app.use("/customers", customers);
app.use("/reciepts", reciepts);
app.use("/rents", rents);

//Express server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Started server on port " + port);
});
