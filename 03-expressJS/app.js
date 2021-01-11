const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// allows us to use static (styles, scripts) files
app.use(express.static(path.join(__dirname, 'public')));

// we've created our own middleware!
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);