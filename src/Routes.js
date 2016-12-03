import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import App from './App';
import List from './List';
import Room from './Room';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/list" component={List}/>
    <Route path="/room" component={Room}/>
    <Route path="/map" component={List}/>
  </Router>
);

export default Routes;
