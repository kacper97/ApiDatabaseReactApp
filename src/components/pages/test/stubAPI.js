 import _ from 'lodash';
class StubAPI {
      constructor() {
          this.players = [] ;  // CHANGED
      }
      
      initialize(players) {    // NEW 
          this.players = players
          return null; 
      }
      delete(k) {
          let elements = _.remove(this.player, 
              (player) => player._id === k
          );
          return elements; 
      }

        getAll() {
            return this.player ;
        }

        add(id,n,c) {
          let len = this.player.length ;
          let newLen = this.player.push({
              _id: id, name: n, club : c}) ;
          return newLen > len ;
      }

        update(id,n,c) {
          var index = _.findIndex(this.players, 
              (player) => player._id === id
          );      
          if (index !== -1) {
              this.players.splice(index, 1, 
                  { _id: id, name: n, club: c});
              return true ;
          }
          return false ;
      }


    }

    export default (new StubAPI() );