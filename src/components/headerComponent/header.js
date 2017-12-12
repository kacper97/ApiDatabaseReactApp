import React, { Component } from 'react';

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
                <a href="/"> Home </a>
              </li>
              <li>
               <a href="/Team">Team </a>
              </li>
              <li>
                <a href="/History">History</a>
              </li>
              <li>
                <a href="/Facts">Facts</a>
              </li>
              <li>
                <a href="/Origin">Origin</a>
              </li>
              <li>
                <a href="/Food">Food</a>
              </li>
               <li>
                <a href="/Players">Players</a>
                </li>   
              <li className="last">  
                <a href="/Sights">Sights </a>
              </li>
            </ul>
          </nav>
        </header>
        );
      }
    }

 export default Header;