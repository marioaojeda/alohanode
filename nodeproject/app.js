var express = require("express");
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index', { list: ['Item1', 'Item2', 'Item3'] });
});

app.get('/routing', function(request, response) {
    response.send("Hola! (En routing)");    
});

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});