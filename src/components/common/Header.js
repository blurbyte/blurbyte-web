import React from 'react';
import {Link, IndexLink} from 'react-router';

//import components
import {BlurbyteLogo} from './Icons';

const Header = () => (
  <header className="masthead" role="banner">
    <nav className="main-nav">
      <ul>
        <li><IndexLink to="/" activeClassName="active">Portfolio</IndexLink></li>
        <li><Link to="/blog" activeClassName="active">Blog</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
    </nav>
    <div className="main-nav-logo"><Link to="/"><BlurbyteLogo /></Link></div>
    <p className="motto">Code & Design</p>
  </header>
);

export default Header;
