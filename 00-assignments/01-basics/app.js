// 1. Set up a Node.js server on (port 3000)
// 2. Handle two routes "/" and "/users"
//    Return some greeting text on "/"
//    Return a list of dummer users (<ul><li>User 1 </li></ul>)
// 3. Add a form w/ a "username" <input> to the "/" page and
//    submit a POST request to "/create-user" upon a btn click
// 4. Add t he "/create-user" route and parse the incoming data
//    (i.e) the usernam and simply log it to the console

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    // Send a HTML response with some "Page not found text
    if (url === '/create-user') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk)
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();

            console.log(parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);