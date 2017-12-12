class LocalCache {

        constructor() {
           this.player = null ;
        }

        setPhone(player) {
           this.player = player ;
        }

        getPhone() {
           return this.player;
        }

    }

    export default (new LocalCache() );