var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
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

dbRouter.route('/AddEventData')
    .get( function(req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db) {
           var collection = db.collection('events');

           collection.insertMany(eventData, function(err, results){
               res.send(results);
               db.close();
           });
        });
    });

module.exports = dbRouter;