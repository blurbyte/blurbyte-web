import React from 'react';

//common components
import SideLogo from '../common/SideLogo';

//impression
import {NotFoundImpression} from './Icons';

const NotFoundPageContent = () => (
  <div className="bgr-wrapper no-header">
    <div className="wrapper">
      <SideLogo hasHeader={false} />
      <section className="main-content page-not-found-content col2" role="main">
        <header className="wide9">
          <h1>404 Not Found</h1>
        </header>
        <p className="col2 wide4">Dear visitor,<br />unfortunately there is nothing to see here for now 😐</p>
        <div className="svg-wrapper wide9"><NotFoundImpression /></div>
      </section>
    </div>
  </div>
);

export default NotFoundPageContent;
