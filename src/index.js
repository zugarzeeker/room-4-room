import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import App from './App';
import List from './List';
import Room from './Room';
import Workspace from './Workspace';
import './index.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="home"/>
      <Route path="/home" component={Workspace}/>
      <Route path="/list" component={List}/>
      <Route path="/room" component={Room}/>
      <Route path="/map" component={List}/>
    </Route>
  </Router>
), document.getElementById('root'));
