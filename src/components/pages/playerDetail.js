 	import React from 'react';
    import localCache from './localCache';
    import request from 'superagent' ; 

    class Specification extends React.Component {
      render(){
          var player = this.props.player ;           
          var availability = player.availability.map(function(avb,index) {
              return <dd key={index}>{avb}</dd> ;
              }) ;
          let dimensions = player.sizeAndWeight.dimensions.map(function(dim,index) {
              return  <dd key={index}>{dim}</dd> ;
              }) ;
          let display = (
              <div>
                <ul className="specs">
                  <li >
                    <span>Availability and Networks</span>
                    <dl>
                      <dt>Availability</dt>
                         {availability}
                    </dl>
                  </li>
                  <li>
                    <span>Battery</span>
                    <dl>
                      <dt>Type</dt>
                      <dd>{player.battery.type}</dd>
                      <dt>Talk Time</dt>
                      <dd>{player.battery.talkTime}</dd>
                      <dt>Standby time (max)</dt>
                      <dd>{player.battery.standbyTime}</dd>
                    </dl>
                  </li> 
                  <li>
                    <span>Storage and Memory</span>
                    <dl>
                      <dt>RAM</dt>
                      <dd>{player.storage.ram}</dd>
                      <dt>Internal Storage</dt>
                      <dd>{player.storage.flash}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Connectivity</span>
                    <dl>
                      <dt>Network Support</dt>
                      <dd>{player.connectivity.cell}</dd>
                      <dt>WiFi</dt>
                      <dd>{player.connectivity.wifi}</dd>
                      <dt>Bluetooth</dt>
                      <dd>{player.connectivity.bluetooth}</dd>
                      <dt>Infrared</dt>
                      <dd>{player.connectivity.infrared}</dd>
                      <dt>GPS</dt>
                      <dd>{player.connectivity.gps}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Android</span>
                    <dl>
                      <dt>OS Version</dt>
                      <dd>{player.android.os}</dd>
                      <dt>UI</dt>
                      <dd>{player.android.ui}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Size and Weight</span>
                    <dl>
                      <dt>Dimensions</dt>
                          {dimensions}
                       <dt>Weight</dt>
                      <dd>{player.sizeAndWeight.weight}</dd>
                    </dl>
                  </li> 
                  <li>
                    <span>Display</span>
                    <dl>
                      <dt>Screen size</dt>
                      <dd>{player.display.screenSize}</dd>
                      <dt>Screen resolution</dt>
                      <dd>{player.display.screenResolution}</dd>
                      <dt>Touch screen</dt>
                      <dd>{player.display.touchScreen}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Hardware</span>
                    <dl>
                      <dt>CPU</dt>
                      <dd>{player.hardware.cpu}</dd>
                      <dt>USB</dt>
                      <dd>{player.hardware.usb}</dd>
                      <dt>Audio / headplayer jack</dt>
                      <dd>{player.hardware.audioJack}</dd>
                      <dt>FM Radio</dt>
                      <dd>{player.hardware.fmRadio}</dd>
                      <dt>Accelerometer</dt>
                      <dd>{player.hardware.accelerometer}</dd>
                    </dl>
                  </li> 
                  <li>
                    <span>Camera</span>
                    <dl>
                      <dt>Primary</dt>
                      <dd>{player.camera.primary}</dd>
                      <dt>Features</dt>
                      <dd>{player.camera.features.join(', ')}</dd>
                    </dl>
                  </li>
                  <li>
                    <span>Additional Features</span>
                    <dd>{player.additionalFeatures}</dd>
                  </li>           
                  </ul>            
            </div>
           )
          return (
               <div>
                  {display}
              </div>
             );
      }
    };

    
    class ImagesSection extends React.Component { 
      render(){
          var thumbImages = this.props.player.images.map(function(img,index) {
              return (
                <li>
                   <img key={index} src={"/playerSpecs/" + img}
                       alt="missing" />
                </li>
                ) ;
              } );
          var mainImage = (
            <div className="player-images">
              <img src={"/playerSpecs/" + this.props.player.images[0]} 
                    alt={this.props.player.name}
                    className="player" />
            </div>
            ) ;
            return (
                <div>
                   {mainImage}
                   <h1>{this.props.player.name}</h1>
                   <p>{this.props.player.description}</p>
                   <ul className="player-thumbs">
                       {thumbImages}
                   </ul>
                  </div>
                  );
          }
    };

    class PlayerDetail extends React.Component {
        state = { };

       componentDidMount() {
          request.get(
             '/playerSpecs/players/' + this.props.params.id + '.json', (err, res) => {
                let json = JSON.parse(res.text);
                localCache.setPlayer(json);
                this.setState({});
           }) ;
      } 

       render(){
          let display = <p>No player details</p> ; 
          let player = localCache.getPlayer();
           if (player) {
                  display =  (
                      <div>
                         <ImagesSection player={player} />
                         <Specification  player={player} />       
                    </div>
                    ) ;
              }
                return (
            <div>
              {display}
            </div>
            );
      }
    };

    export default PlayerDetail;