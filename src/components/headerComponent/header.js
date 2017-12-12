import React, { Component } from 'react';
import {
  Link
  } from 'react-router-dom';

class Header extends Component{
      render(){
        return(
        <header>

          <div className="poland">
            POLAND
          </div>

          <nav>
            <ul>
              <li className="first">
                <Link to="/"> Home </Link>
              </li>
              <li>
               <Link to="/Team">Team </Link>
              </li>
              <li>
                <Link to="/History">History</Link>
              </li>
              <li>
                <Link to="/Facts">Facts</Link>
              </li>
              <li>
                <Link to="/Origin">Origin</Link>
              </li>
              <li>
                <Link to="/Food">Food</Link>
              </li>
               <li>
                <Link to="/Players">Players</Link>
                </li>   
              <li className="last">  
                <Link to="/Sights">Sights </Link>
              </li>
            </ul>
          </nav>
         
        </header>
        );
      }
    }

 export default Header;