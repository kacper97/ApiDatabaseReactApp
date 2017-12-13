 var _ = require('lodash')
    var datastore = require('../datastore');

    // Get all players
    exports.index = function handleError(res, err) {
    return res.status(500).json(err);
      }

        exports.index = function(req, res) {
      Player.find(function (err, players) {
        if(err) { return handleError(res, err); }
        console.log('index ok' + players[0]);
        return res.status(200).json(players);
      });
    } ;


    // Get a single player
    exports.show = function(req, res) {
        var index = _.findIndex(datastore.players , 
               function(player) {
                  return player.id == req.params.id;
            });      
         if (index != -1) {
            return res.status(200).json((datastore.players[index] ));
          }
          else {
             return res.sendStatus(404);
           }

    };

    // Creates a new player.
    exports.create = function(req, res) {
        var nextId = 0;
        var last = _.last(datastore.players);
        if (last != undefined) {
           nextId = last.id + 1;
        } else {
          nextId = 1;
        }
        var player = {
           id: nextId,
           name: req.body.name,
           club: req.body.club 
        };
        datastore.players.push(player);
        return res.status(201).json(player);
    };

    // Update an existing player in datastore.
exports.update = function(req, res) {
   Player.findById(req.params.id, function (err, player) {
        if(err) { return handleError(res, err); }
        player.name = req.body.name
        player.club = req.body.club
        player.save(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200, 'Update successful');
        });
    });
 }
 
         
 
// Deletes a player from datastore.
exports.destroy = function(req, res) {
    Player.findById(req.params.id, function (err, player) {
        if(err) { return handleError(res, err); }        
        player.remove(function (err) {
            if(err) { return handleError(res, err); }
            return res.sendStatus(200,'Deleted');
        });
    })