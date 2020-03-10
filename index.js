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
        else if(req.url == "/getData")
        {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write("<h1>JSON document that returns name and class</h1>");
        }
        //fix tomorrow
        else if(req.url == "/week9assignment"){
        fs.readFile('web/week9/assignment/public/form.html', 'utf8',  function(err, data) {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(data);
        });
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

