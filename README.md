# Node JS Bootcamp

1. [Install NodeJS](https://nodejs.org/en/)
1. [Offical Docs](https://nodejs.org/en/docs/guides/)

## Running a node js file

```cmd
node first-app.js
```

## What is NodeJS?

1. A JavaScript runtime
1. JavaScript on the server
1. We use Node to run JS out of the browser
1. Runs on V8
   - Written in c++
1. Can access local file system
1. Does NOT run in the browser
1. No DOM (No browser)
1. Not limited to the server
   - It's a JS runtime, can execute any JS code w/ node.js
   - Utility scripts, build tools
1. We use it to run on our server
   - Create server & listen to incoming requests
1. We use it to create business logic
   - Handle requests, validate input, connect to DB
1. We use it to handle requests
   - Return responses (Rendered HTML, Json)

## The Basics

1. [Request/Response Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
1. Single Thread, Event Loop, Blocking Code
   ![](images/single-thread-el-block.png)
   - [Link](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
1. The Event Loop
   ![](images/event-loop.png)
   - Takeaway, event loop prioritizes jobs so that short jobs take priority
     - Performance is key
   - [Link](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
1. Creating a Server

   ```js
   // Creating a server
   // Things like Express.js make a lot of this easier
   const http = require('http');
   const routes = require('./routes');

   console.log(routes.someText);

   const server = http.createServer(routes.handler);

   // Starts a process where node will keep it running for incoming requests
   server.listen(3000);
   ```

# Development Workflow & Debugging

## NPM Scripts

1. You need [NPM](https://www.npmjs.com/)
1. Set up a NPM project
   ```cmd
   npm init
   ```
   - Creates a package.json file
1. Run a project
   ```cmd
   npm start
   ```

## 3rd Party Packages

1. Server Auto Restart (nodemon)
   - [Link](https://www.npmjs.com/package/nodemon)
   ```cmd
   npm install nodemon
   ```
   - You can determine 'how' it gets installed
     ```
     npm install nodemon --save-dev
     ```
     - Installs just on your project, not globally
   - Can just reinstall w/ `node install`
1. Nodemon is nice
   - Restarts your server when you make a change
1. Debugging Nodejs
   - [Node Link](https://nodejs.org/en/docs/guides/debugging-getting-started/)
   - [VS Code Link](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
   - VS Code debugger lets you change values while debugging
   - Debugger tab, double cliick on variable

# Express.js

1. This will be a production dependency
   ```cmd
   npm install --save express
   ```
1. It's all about Middleware

## Why?

1. Server Logic is complex
   - Listen to request 'on' event
   - Parse request
   - Check url routes
1. We want to focus on Business Logic, not nitty-gritty details
   - Use a framework for this!

## Alternatives

1. Vanilla Node.js
   - Depending on complexity of app
1. Adonis.js
   - Laravel/php inspired
1. Koa
1. Sails.js
