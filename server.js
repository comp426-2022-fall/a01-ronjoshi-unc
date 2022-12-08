// Require http module
const http = require('http');
// Require fs module
const fs = require('fs');
// Require minimist module (make sure you install this one via npm).
const args = require('minimist')(process.argv.slice(2));
const port = args.port || 3000;
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