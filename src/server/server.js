const express = require("express");
const connectDB = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const products = require("./routes/product");
const customers = require("./routes/customer");

app = express();

app.use(cors());

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
