var cluster = require("cluster");
var http = require("http");
const PORT = 8080;
var NUM = 1;

var numThread = 4;

if (cluster.isMaster) {
    var i = 0;

    while (i < numThread) {
        cluster.fork();
        i++;
    }

    cluster.on("exit", function (worker, code, signal) {
        console.log("Worker " + worker.process.pid + " died");
    });
}
else {
    function handleRequest(req, res) {
        res.end('Welcome on Hackmyfortress.com');
    }

    var server = http.createServer(handleRequest);
    server.listen(PORT, function () {
        console.log("Server listening on: http://localhost:%s", PORT);
    });
}