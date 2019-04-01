// var http = require('http');

// var handleRequest = function(request, response) {
//   console.log('Received request for URL: ' + request.url);
//   response.writeHead(200);
//   response.end('Hello World!');
// };
// var www = http.createServer(handleRequest);
// www.listen(8080);

var http = require('http')
var server = http.createServer((request, response) => {
  console.log('We have a request for url: ' + request.url)
  response.writeHead(200)
  response.end('Hello from Thang123 with love!!!')
})
server.listen(9090)
console.log('http server at 9090')