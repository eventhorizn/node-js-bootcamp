const http = require('http');
const express = require('express');

const app = express(); // valid request handler

// every request will go through this function
// next is another function
// top to bottom if you call next
// if you don't call next, return the response
app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware');
});

const server = http.createServer(app);

server.listen(3000);