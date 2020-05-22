const express = require("express");
const Products = require("../db/products");
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("This is products");
});

router.post("/products", (req, res) => {
  const products = new Products({
    name: req.body.name,
    price: req.body.price,
  });

  products
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200);
    });
});

module.exports = router;
