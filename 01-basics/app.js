// Creating a server
// Things like Express.js make a lot of this easier
const http = require('http');
const routes = require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

// Starts a process where node will keep it running for incoming requests
server.listen(3000);