var express = require('express');
var eventRouter  = express.Router();

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

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        
        res.render('event',
            {
            navigation: [
                { Link: 'services', Text: 'Services'},
                { Link: 'portfolio', Text: 'Portfolio'},
                { Link: 'about', Text: 'About'},
                { Link: 'team', Text: 'Team'},
                { Link: 'contact', Text: 'Contact'},
                { Link: 'events', Text: 'Events'}
                ],
            events: eventData[id]
            }
        );
    });

module.exports = eventRouter;