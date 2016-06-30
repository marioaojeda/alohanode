var express = require("express");
var app = express();
var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

eventRouter.route('/')
    .get(function(req, res) {
        res.send('Hola events!');
    });

eventRouter.route('/event')
    .get(function(req, res) {
        res.send('Hola single event!');
    });

app.use('/events', eventRouter);

app.get('/', function(request, response) {
    response.render(
        'index', 
        { 
            navigation: [
                { Link: 'services', Text: 'Services'},
                { Link: 'portfolio', Text: 'Portfolio'},
                { Link: 'about', Text: 'About'},
                { Link: 'team', Text: 'Team'},
                { Link: 'contact', Text: 'Contact'},
                { Link: 'events', Text: 'Events'}
            ]
        }
    );
});

app.get('/routing', function(request, response) {
    response.send("Hola! (En routing)");    
});

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});