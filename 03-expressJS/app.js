const express = require('express');

const app = express(); // valid request handler

// every request will go through this function
// next is another function
// top to bottom if you call next
// if you don't call next, return the response
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

app.use('/', () => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    //console.log('In another middleware');
    res.send('<h1>The "Add Product" Page</h1>');
});

// '/' is default
// We don't call next above, and the filter would match this
// so we put it last. If it was first it would ALWAYS be hit
app.use('/', (req, res, next) => {
    //console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
});

// creates our server
app.listen(3000);