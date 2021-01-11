const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// we've created our own middleware!
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1');
});

app.listen(3000);