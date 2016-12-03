import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import cn from 'classnames';
import MainNav from './MainNav';

class App extends Component {
  render() {
    if (!window.location.pathname.includes('home')) {
      ((document.getElementById('mainNav') || {}).style || {}).position = "relative";
    }
    return (
      <div id="page-top" className="index">
        <MainNav menus={
          // ['Services', 'Portfolio', 'About', 'Team', 'Contact']
          ['Login', 'Register']
        }/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
