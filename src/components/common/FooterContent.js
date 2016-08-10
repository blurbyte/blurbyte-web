import React, {PropTypes} from 'react';

//import components
import {TwitterIcon, GithubIcon} from './Icons';

const FooterContent = ({expanded}) => (
  <div className="main-footer-wrapper">
    <footer className={`main-footer${expanded ? ' expanded': ''}`}>
      <div className="main-footer-info">
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank"><TwitterIcon width={40} height={40} /></a>
          <a href="https://github.com/blurbyte" target="_blank"><GithubIcon width={40} height={40} /></a>
        </div>
        <p className="contact-info">contact<span className="email">info@blurbyte.com</span></p>
      </div>
    </footer>
  </div>
);

FooterContent.propTypes = {
  expanded: PropTypes.bool.isRequired
};

export default FooterContent;
