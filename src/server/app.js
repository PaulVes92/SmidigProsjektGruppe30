const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Server running on port: ${port}`));
// const cors = require("cors");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const uri =
//   "mongodb+srv://admin:admin@cluster0-rxtwc.mongodb.net/test?retryWrites=true&w=majority";

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//   })

//   .then(() => {
//     console.log("MongoDB connected");
//   })

//   .catch((err) => console.log(err));
