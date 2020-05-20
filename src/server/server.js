const express = require("express");

app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => {
  console.log("Started server on port " + port);
});
