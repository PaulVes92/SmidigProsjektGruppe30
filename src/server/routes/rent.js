const express = require("express");
const Rent = require("../db/rents");
const router = express.Router();

//Get all rents
router.get("/", async (req, res) => {
  try {
    const rents = await Rent.find();
    res.json(rents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one rent
router.get("/:id", getRent, (req, res) => {
  res.json(res.rent);
});

//Create one rent
router.post("/", async (req, res) => {
  const rent = new Rent({
    productid: req.body.productid,
    productName: req.body.productName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    rentedDate: req.body.rentedDate,
    returnDate: req.body.returnDate,
  });

  try {
    const newReciept = await rent.save();
    res.status(201).json(newReciept);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one rent
router.patch("/:id", getRent, async (req, res) => {
  if (req.body.productId != null) {
    res.rent.productId = req.body.productId;
  }

  if (req.body.productName != null) {
    res.rent.productName = req.body.productName;
  }

  if (req.body.lastName != null) {
    res.rent.lastName = req.body.lastName;
  }

  if (req.body.email != null) {
    res.rent.email = req.body.email;
  }

  if (req.body.phoneNumber != null) {
    res.rent.phoneNumber = req.body.phoneNumber;
  }

  if (req.body.rentedDate != null) {
    res.rent.rentedDate = req.body.rentedDate;
  }

  if (req.body.returnDate != null) {
    res.rent.returnDate = req.body.returnDate;
  }

  try {
    const updatedRent = await res.rent.save();
    res.json(updatedRent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete one rent
router.delete("/:id", getRent, async (req, res) => {
  try {
    await res.rent.remove();
    res.json({ message: "Deleted this rent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRent(req, res, next) {
  try {
    rent = await Rent.findById(req.params.id);
    if (rent == null) {
      return res.status(404).json({ message: "Cant find rented product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.rent = rent;
  next();
}

module.exports = router;
