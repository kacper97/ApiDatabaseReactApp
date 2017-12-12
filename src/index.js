  import { Router, Route, IndexRoute, browserHistory } from 'react-router';
  import React from 'react';
    import ReactDOM from 'react-dom';
    import PlayerCatalogueApp from './components/pages/homePage';
    import PlayerDetail from  './components/pages/playerDetail';


//components
import Header from './components/headerComponent/header';
import Team from './components/pages/team';
import Facts from './components/pages/facts';
import History from './components/pages/history';
import Origin from './components/pages/origin';
import Sights from './components/pages/sights';
import Food from './components/pages/food';
import Geography from './components/pages/geography';


//includes
import './Assets/css/default.min.css';

     class App extends React.Component {
          render() {
            return (
              <div>
                <Header />
                {this.props.children}
              </div>
            )
          }
    };

    ReactDOM.render( 
              <Router history={browserHistory} >
                <Route path="/" component={App}  >
                   <IndexRoute component={PlayerCatalogueApp}/>
                   <Route path="phones/:id" component={PlayerDetail} />
                <Route  path='/team' component={Team} />
                <Route path='/facts' component={Facts} />
                <Route path='/history' component={History} />
                <Route path='/origin' component={Origin}/>
                <Route path='/sights' component={Sights}/>
                <Route path='/food' component={Food}/>
                <Route path='/geography' component={Geography}/>
                </Route>
              </Router>
            ,
      document.getElementById('root')
    );