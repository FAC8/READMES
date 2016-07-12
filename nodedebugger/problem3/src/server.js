const http = require('http');
const handler = require('./handler.js');
const port = 4000;
const server = http.createServer(handler);

server.listen(port);

console.log(`server is running on: http://localhost:${port}`)
