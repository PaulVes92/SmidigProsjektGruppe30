const express = require("express");
const connectDB = require("./db/connection");
const bodyParser = require("body-parser");
const products = require("./routes/products");
const customers = require("./routes/customers");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HOME");
});

//Import routes
app.use("/products", products);
app.use("/customers", customers);

// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
// });

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Started server on port " + port);
});