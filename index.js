// Require the "http" package
var http = require('http');

// Use the createServer method of your http server object to handle requests.
function onRequest(req, res) {   

        if (req.url == "/home")
        {  
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write("<h1>Welcome to the Home Page.</h1>");
        }
        else if(req.url == "/getData")
        {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write("<h1>JSON document that returns name and class</h1>");
        }
        else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("<h1>Page was not found.</h1>");
        }

        console.log("it worked ")
        res.end();
    }

var server = http.createServer(onRequest);
server.listen(process.env.port);
console.log("server is listening on port");

