const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// we've created our own middleware!
app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000);