// Require the "http" package
var http = require('http');
var port = process.env.PORT || 5000;
var fs = require('fs');


// Use the createServer method of your http server object to handle requests.
function onRequest(req, res) {   

        if (req.url == "/home")
        {  
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write("<h1>Welcome to the Home Page.</h1>");
        }
        // **********************************
        //how to do that???
        else if(req.week9 == "/week9/assignment/app.js"){
            app.set('views', __dirname + '/views');
        }
        //************************************ */
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
server.listen(port);
console.log("server is listening on port");

