var mongoose = require('mongoose')
  var Schema = mongoose.Schema;

  var  PlayerSchema = new Schema({
    name: { type: String, required: true } ,
    club: { type: String, required: true } ,
    number: Number
  });

  module.exports = mongoose.model('players', PlayerSchema);