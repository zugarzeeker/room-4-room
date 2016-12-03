import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import cn from 'classnames';
import MainNav from './MainNav';

class App extends Component {
  render() {
    if (!this.props.location.pathname.includes('home') && !window.location.pathname.includes('home') && !(new RegExp('index.html$')).test(window.location.pathname)) {
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
