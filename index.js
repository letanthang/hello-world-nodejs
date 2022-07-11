// var http = require('http');

// var handleRequest = function(request, response) {
//   console.log('Received request for URL: ' + request.url);
//   response.writeHead(200);
//   response.end('Hello World!');
// };
// var www = http.createServer(handleRequest);
// www.listen(8080);

var http = require('http')
var fs = require("fs");


var server = http.createServer((request, response) => {
  console.log('We have a request for url: ' + request.url)
  if (request.url === '/form') {
    fs.readFile('form.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(data)
      response.end()
    })
  } else if (request.url === '/hello') {
    response.writeHead(200)
    response.end('hello world 2022')
  } else {
    response.writeHead(200)
    response.end('Hello from Thang123 with love 2022 !!!')
  }


})
server.listen(3000)
console.log('http server at 3000')
