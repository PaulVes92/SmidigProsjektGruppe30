const express = require("express");
const connectDB = require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const products = require("./routes/product");
const customers = require("./routes/customer");
const reciepts = require("./routes/reciept");
const rents = require("./routes/rent");

app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HOME");
});

//Import routes
app.use("/products", products);
app.use("/customers", customers);
app.use("/reciepts", reciepts);
app.use("/rents", rents);

// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
// });

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Started server on port " + port);
});
