const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();
const adminData = require('./admin');

// get does an exact match
router.get('/', (req, res, next) => {
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' }); // defined pug as template engine
});

module.exports = router;