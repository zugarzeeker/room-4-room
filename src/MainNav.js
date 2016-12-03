import React from 'react';
import { Link } from 'react-router';
import './MainNav.scss'
import cn from 'classnames';

const renderMenu = (menus = []) => menus.map((menu) => (
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
              <Link className="navbar-brand page-scroll logo" to={(menus || []).length === 5 ? "#page-top" : "/"}>
                <img src="logo.png"/>
              </Link>
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
