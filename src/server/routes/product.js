const express = require("express");
const Product = require("../db/products");
const router = express.Router();

//Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one product
router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

//Create one product
router.post("/", async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    comment: req.body.comment,
    category: req.body.category,
    size: req.body.size,
    status: req.body.status,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one product
router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.id != null) {
    res.product.id = req.body.id;
  }

  if (req.body.name != null) {
    res.product.name = req.body.name;
  }

  if (req.body.price != null) {
    res.product.price = req.body.price;
  }

  if (req.body.comment != null) {
    res.product.comment = req.body.comment;
  }

  if (req.body.category != null) {
    res.product.category = req.body.category;
  }

  if (req.body.size != null) {
    res.product.size = req.body.size;
  }

  if (req.body.status != null) {
    res.product.status = req.body.status;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete one product
router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Deleted this product" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Cant find product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
