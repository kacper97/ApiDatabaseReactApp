  import React from 'react';
  import localCache from './localCache';
  import request from 'superagent' ; 

     class ImagesSection extends React.Component { 
      render(){
          var mainImage = (
            <div className="player-images">
              <img src={"/playerInfo/" + this.props.player.images[0]}  />
           </div>
            ) ;
            return (
                <div>
                   {mainImage}
                   <h1>{this.props.player.name}</h1>
                   <p>{this.props.player.description}</p>
                  </div>
                  );
          }
    };

    class PlayerDetail extends React.Component {
        state = { };

       componentDidMount() {
          request.get(
             '/playerInfo/players/' + this.props.params.id + '.json', (err, res) => {
                let json = JSON.parse(res.text);
                localCache.setPlayer(json);
                this.setState({});
           }) ;
      } 

      render(){
          let display = <p>No player details</p> ; 
          let player = localCache.getPlayer();
          if (player) {
              display =  <ImagesSection player={player} /> ;
          }
          return (
            <div>
              {display}
            </div>
            );
      }
    };

    export default PlayerDetail;