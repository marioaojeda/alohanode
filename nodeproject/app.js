var express = require("express");
var app = express();
var port = process.env.PORT;

app.get('/', function(request, response) {
    response.send("Hola!");    
});

app.get('/routing', function(request, response) {
    response.send("Hola! (En routing)");    
});

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});