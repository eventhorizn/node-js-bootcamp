const http = require('http');
const express = require('express');

const app = express(); // valid request handler

const server = http.createServer(app);

server.listen(3000);