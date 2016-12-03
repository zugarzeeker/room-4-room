import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import PortfolioModal from './PortfolioModal';
import SearchBox from './SearchBox';

const Workspace = () => (
  <div>
    <Header/>
    <SearchBox/>
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

export default Workspace;
