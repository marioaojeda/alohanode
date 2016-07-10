var express = require('express');
var eventRouter  = express.Router();

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