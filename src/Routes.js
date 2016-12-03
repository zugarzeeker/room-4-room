import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import App from './App';
import List from './List';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/list" component={List}/>
  </Router>
);

export default Routes;
