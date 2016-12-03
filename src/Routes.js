import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import App from './App';
import List from './List';
import Room from './Room';
import Workspace from './Workspace';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home"/>
      <Route path="home" component={Workspace}/>
      <Route path="/list" component={List}/>
      <Route path="/room" component={Room}/>
      <Route path="/map" component={List}/>
    </Route>
  </Router>
);

export default Routes;
