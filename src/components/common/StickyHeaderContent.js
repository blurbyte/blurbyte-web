import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//import components
import {BlurbyteLogo, HamburgerIcon} from './Icons';

const StickyHeaderContent = ({onHamburgerClick, onLinkClick, expanded}) => (
  <header className={`sticky-header${expanded ? ' expanded' : ''}`} role="banner">
      <div className="main-nav-logo"><Link to="/"><BlurbyteLogo width={240} height={50} /></Link></div>
      <nav className="main-nav" >
        <ul>
          <li><IndexLink onClick={onLinkClick} to="/" activeClassName="active">Portfolio</IndexLink></li>
          <li><Link onClick={onLinkClick} to="/blog" activeClassName="active">Blog</Link></li>
          <li><Link onClick={onLinkClick} to="/about" activeClassName="active">About</Link></li>
        </ul>
      </nav>
      <a href="#" className="expand-menu-btn" onClick={onHamburgerClick}><HamburgerIcon /></a>
  </header>
);

StickyHeaderContent.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool
};

export default StickyHeaderContent;
