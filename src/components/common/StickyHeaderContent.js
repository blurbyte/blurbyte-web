import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//import components
import {BlurbyteLogo, HamburgerIcon} from './Icons';

//animation breakpoints values
import * as breakpoints from '../../utilities/animationBreakpoints';

const StickyHeaderContent = ({positionTop = 0, onHamburgerClick, expanded}) => (
  <header className={`sticky-header${positionTop > breakpoints.CONTRACT_HEADER_BREAKPOINT ? ' contracted' : ''}${expanded ? ' expanded' : ''}`} role="banner" style={{ top: positionTop }}>
    <div className="main-nav-wrapper">
      <div className="main-nav-logo"><Link to="/"><BlurbyteLogo width={240} height={50} /></Link></div>
      <nav className="main-nav" >
        <ul>
          <li><IndexLink to="/" activeClassName="active">Portfolio</IndexLink></li>
          <li><Link to="/blog" activeClassName="active">Blog</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </nav>
      <a href="#" className="expand-menu-btn" onClick={onHamburgerClick}><HamburgerIcon /></a>
    </div>
  </header>
);

StickyHeaderContent.propTypes = {
  positionTop: PropTypes.number,
  onHamburgerClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool
};

export default StickyHeaderContent;
