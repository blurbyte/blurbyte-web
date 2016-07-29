import React from 'react';

//import components
import {TwitterIcon, GithubIcon} from './Icons';

const Footer = () => (
  <footer className="main-footer">
    <div className="wrapper">
      <div className="social-links">
        <a href="https://twitter.com/" target="_blank"><TwitterIcon /></a>
        <a href="https://github.com/blurbyte" target="_blank"><GithubIcon /></a>
      </div>
      <p className="contact-info">contact<span className="email">info@blurbyte.com</span></p>
      </div>
  </footer>
);

export default Footer;
