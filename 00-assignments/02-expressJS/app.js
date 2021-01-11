const express = require('express');

const app = express();

// 2
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });

// 2
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     res.send('<h1>Hello from Express!</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>The "Users" Page</h1>');
});

// 3
app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);