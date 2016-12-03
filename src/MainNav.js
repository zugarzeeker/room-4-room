import React from 'react';

const renderMenu = (menus) => menus.map((menu) => (
  <li>
      <a className="page-scroll" href={`#${menu.toLowerCase()}`}>{menu}</a>
  </li>
));
const MainNav = ({ menus }) => (
  <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container">
          <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  {renderMenu(menus)}
              </ul>
          </div>
      </div>
  </nav>
);

export default MainNav;
