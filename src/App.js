import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import cn from 'classnames';
import Header from './Header';
import Slide from './Slide';
import SearchBox from './SearchBox';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Slide/>
        <SearchBox/>
      </div>
    );
  }
}

export default App;
