import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import cn from 'classnames';
import MainNav from './MainNav';
import Header from './Header';
import Services from './Services';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';

class App extends Component {
  render() {
    return (
      <div id="page-top" class="index">
        <MainNav menus={
          ['Services', 'Portfolio', 'About', 'Team', 'Contact']
        }/>
        <Header/>
        <Services/>
        <Portfolio/>
        <About/>
        <Team/>
        <Clients/>
        <Contact/>
        <Footer/>
        <PortfolioModal/>
      </div>
    );
  }
}

export default App;
