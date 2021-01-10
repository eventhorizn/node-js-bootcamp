// Creating a server
// Things like Express.js make a lot of this easier
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // We have all these chunks, we need to buffer them
        // 'Bus' is waiting, what to do w/ it?
        // We return the req.on, so that when this is hit,
        // we don't continue on to lower code
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // Sync, blocks execution until it's done
            // fs.writeFileSync('message.txt', message);
            // B/c of async, you need to make sure things
            // run in the correct order w/ callbacks
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302; //redirect
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

// Starts a process where node will keep it running for incoming requests
server.listen(3000);