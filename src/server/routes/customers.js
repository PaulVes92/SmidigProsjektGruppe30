const express = require("express");
const Customer = require("../db/customers");
const router = express.Router();

//Get all customers
router.get("/", async (req, res) => {
    try {
        const customers = await Customers.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Get a customer
router.get("/:id", getCustomer, (req, res) => {
    res.json(res.customer);
});

//Create a customer
router.post("/", async (req, res) => {
    const customer = new Customer({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        comment: req.body.comment,
        category: req.body.category,
        size: req.body.size,
        status: req.body.status,
    });

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Update a customer
router.patch("/:id", getCustomer, async (req, res) => {
    if (req.body.id != null) {
        res.customer.id = req.body.id;
    }

    if (req.body.name != null) {
        res.customer.name = req.body.name;
    }

    if (req.body.price != null) {
        res.customer.price = req.body.price;
    }

    if (req.body.comment != null) {
        res.customer.comment = req.body.comment;
    }

    if (req.body.category != null) {
        res.customer.category = req.body.category;
    }

    if (req.body.size != null) {
        res.customer.size = req.body.size;
    }

    if (req.body.status != null) {
        res.customer.status = req.body.status;
    }

    try {
        const updatedCustomer = await res.customer.save();
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete a customer
router.delete("/:id", getCustomer, async (req, res) => {
    try {
        await res.customer.remove();
        res.json({ message: "Deleted this customer" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCustomer(req, res, next) {
    try {
        customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: "Cant find customer" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.customer = customer;
    next();
}

module.exports = router;