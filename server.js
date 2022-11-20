// Require http module
const http = require('http');
// Require fs module
const fs = require('fs');
// Require minimist module (make sure you install this one via npm).
const args = require('minimist')(process.argv.slice(2));
// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = args.port || 3000;
// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.
fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if(err) {
        console.log(err); return;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
});
// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.





// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.





// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 




// That's it! You're all done!
