 module.exports = function(app) {
      app.use('/api/players', require('./api/players/index'));

    };