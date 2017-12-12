import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  } from 'react-router-dom';


//components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Team from './components/pages/team';
import Facts from './components/pages/facts';
import History from './components/pages/history';
import Origin from './components/pages/origin';
import Sights from './components/pages/sights';
import Food from './components/pages/food';
import FilteredPlayers from './components/pages/players';

//includes
import './Assets/css/default.min.css'


ReactDOM.render(
      <Router>
      <div className="App">
      
      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/facts' component={Facts} />
        <Route exact path='/history' component={History} />
        <Route exact path='/origin' component={Origin}/>
        <Route exact path='/sights' component={Sights}/>
        <Route exact path='/food' component={Food}/>
        <Route exact path='/players' component={FilteredPlayers}/>

     
      </div>
    </Router>,
 document.getElementById('root')

);