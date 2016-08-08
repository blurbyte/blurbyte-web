import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//import components
import {BlurbyteLogo} from './Icons';

const StickyHeaderContent = ({positionTop = 0}) => (
  <header className="sticky-header" role="banner" style={{top: positionTop}}>
    <div className="main-nav-logo"><Link to="/"><BlurbyteLogo width={240} height={50} /></Link></div>
    <nav className="main-nav">
      <ul>
        <li><IndexLink to="/" activeClassName="active">Portfolio</IndexLink></li>
        <li><Link to="/blog" activeClassName="active">Blog</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
    </nav>
  </header>
);

StickyHeaderContent.propTypes = {
  positionTop: PropTypes.number
};

export default StickyHeaderContent;
