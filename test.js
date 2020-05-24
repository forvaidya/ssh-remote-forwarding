#Simple HTTP server listening port 8080 for testing.

var http = require('http');
var i = 0;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World! ' + i.toString() + "\n" ); 
  res.end(); //end the response
  i += 1; 
}).listen(8080);
