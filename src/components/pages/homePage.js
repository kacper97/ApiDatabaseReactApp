import React from 'react';

import _ from 'lodash';
import Players from './Data';
import { Link } from 'react-router'; 

    class SelectBox extends React.Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput( type,value);
    };

    handleTextChange = (e) => {
        this.handleChange( e, 'search', e.target.value);
    };



    render() {
        return (
            <div className="col-md-10">
                <input type="text" placeholder="Search For Player" 
                    value={this.props.filterText}
                    onChange={this.handleTextChange} />
            </div>
        );
      }
  }
0
    class PlayerItem extends React.Component {
       render() {
           return (
                <li className=" player-listing">
                  
                  <Link to={'/players/' + this.props.player.id}> {this.props.player.name}</Link>
                  <p> Club Name : {this.props.player.club} </p>
                  <p> Jearsey Number: {this.props.player.number} </p>

                </li>
               ) ;
         }
     } ;


    class FilteredPlayerList extends React.Component {
      render() {
          var displayedPlayers = this.props.players.map(function(player) {
            return <PlayerItem key={player.id} player={player } /> ;
          }) ;
          return (
                  <div className="col-md-10">
                    <ul className="players">
                        {displayedPlayers}
                    </ul>
                  </div>
            ) ;
      }
    }

    class PlayerApp extends React.Component {
    state = { search: '' };

    handleChange = (type, value) => {
        if ( type === 'search' ) {
            this.setState( { search: value } ) ;
        } 
    };
            render() {
             let list = Players.filter( (p) => {
             return p.name.toLowerCase().search(
              this.state.search.toLowerCase() ) !== -1 ;
      } );
      let filteredList = _.sortBy(list, this.state.sort) ;
         return (
                <div className="view-container">
                <div className="view-frame">
                   <div className="container-fluid">
                   <div className="row">
                      <SelectBox onUserInput={this.handleChange } 
                             filterText={this.state.search} 
                             sort={this.state.sort} />
                       <FilteredPlayerList players={filteredList} />
                  </div> 
                  </div>                   
                </div>
              </div>
         );
    }
  }

  export default PlayerApp;