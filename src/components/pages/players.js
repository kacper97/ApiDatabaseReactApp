import React, { Component } from 'react';
import localCache from './localCache';
var request = require('superagent') ;

class PlayerListItem extends Component {
    render() {
        return (
            <li> 
                <h2>{this.props.player.name}</h2>
                <p> {this.props.player.club} , Player's Shirt Number -> {this.props.player.number} </p> 
            </li>
        );
    }
}

class PlayerList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.list.length === nextProps.list.length ) {
            return false ;
        } else {
            return true ;
        }     
    }

    render() {
        var items = this.props.list.map(function(item) {
            return <PlayerListItem key={item.name} player={item} />;
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
}


class FilteredPlayers extends Component {
    state = {
        searchText : ''
    };

    componentDidMount() {
        request.get('http://localhost:3000/players')
            .end(function(error, res){
                if (res) {
                    var players = JSON.parse(res.text);
                    localCache.populate(players);
                    this.setState( {}) ;                
                } else {
                    console.log(error );
                }
            }.bind(this)); 
    }

    filterPlayers = (event) => {
        event.preventDefault() ;
        this.setState({searchText : 
             event.target.value.toLowerCase()});
    };

    render() {
        var updatedList = localCache.getAll().filter(function(item){
            return item.name.toLowerCase().search(
                this.state.searchText) !== -1 ;                
        }.bind(this) );
        return (
            <div>
                <h1>Players List</h1>
                <input type="text" placeholder="Search for player" 
                    onChange={this.filterPlayers} />
                <PlayerList list={updatedList} />
            </div>
        );
    }
}

export default FilteredPlayers;