const express = require('express');
const router = express.Router();
const productsData = require('../data/products.json');

router.get('/', (req, res) => {
    res.json(productsData);
});

module.exports = router;