class LocalCache {

        constructor() {
           this.player = null ;
        }

        setPlayer(player) {
           this.player = player ;
        }

        getPlayer() {
           return this.player;
        }

    }

    export default (new LocalCache() );