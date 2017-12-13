 var _ = require('lodash')
    var datastore = require('../datastore');

    // Get all players
    exports.index = function(req, res) {
        return res.status(200).json(datastore.players);
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

    // Delete a player.
    exports.destroy = function(req, res) {
        var elements = _.remove(datastore.players , 
               function(player) {
                  return player.id == req.params.id;
            });  
         if (elements.length == 1) {
            return res.sendStatus(200);
          } else {
             return res.sendStatus(404);
          }
    };