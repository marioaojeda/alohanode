var express = require("express");
var app = express();
var port = process.env.PORT;

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});