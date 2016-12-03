import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import cn from 'classnames';
import Slide from './Slide';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Slide/>
      </div>
    );
  }
}

export default App;
