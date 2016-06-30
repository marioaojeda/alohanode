var express = require("express");
var app = express();
var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var eventData = [
        {
            name: 'Event 1',
            description: 'The first event',
            date: '2016.01.01',
            time: '1:00 PM',
            duration: '1 Hour',
            location: {
                streetAddr: '100 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 100
        },
        {
            name: 'Event 2',
            description: 'The second event',
            date: '2016.01.01',
            time: '1:00 PM',
            duration: '1 Hour',
            location: {
                streetAddr: '100 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 100
        },
        {
            name: 'Event 3',
            description: 'The third event',
            date: '2016.01.01',
            time: '1:00 PM',
            duration: '1 Hour',
            location: {
                streetAddr: '100 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 100
        },
        {
            name: 'Event 4',
            description: 'The fourth event',
            date: '2016.01.01',
            time: '1:00 PM',
            duration: '1 Hour',
            location: {
                streetAddr: '100 Main St.',
                city: 'Los Angeles',
                state: 'CA',
                zip: '87885',
                lon: 0,
                lat: 0
            },
            capacity: 100
        }
    ];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events',
            {
            navigation: [
                { Link: 'services', Text: 'Services'},
                { Link: 'portfolio', Text: 'Portfolio'},
                { Link: 'about', Text: 'About'},
                { Link: 'team', Text: 'Team'},
                { Link: 'contact', Text: 'Contact'},
                { Link: 'events', Text: 'Events'}
                ],
            events: eventData
            }
        );
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