import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import App from './App';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
);

export default Routes;
