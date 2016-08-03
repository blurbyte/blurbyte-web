import React from 'react';
import {Link} from 'react-router';

//import components
import {BlurbyteLogo} from './Icons';

const SideLogoLink = () => (
  <div className="side-logo">
    <Link to="/"><BlurbyteLogo width={240} height={50} /></Link>
    <p className="motto">Code & Design</p>
  </div>
);

export default SideLogoLink;
