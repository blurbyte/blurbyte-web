import React, {PropTypes} from 'react';

//components
import Header from '../common/Header';
import PageContent from '../common/PageContent';
import SideLogo from '../common/SideLogo';
import BackTop from '../common/BackTop';
import FoldImage from '../common/FoldImage';
import StickyHeader from '../common/StickyHeader';

//icons
import {BbcLogo, EaLogo, SegaLogo, TechnipLogo} from '../common/Icons';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

const AboutPageContent = ({foldImage, about, path}) => {
  const categories = Object.keys(about);

  return(
    <div className="bgr-wrapper">
      <div className="wrapper">
        <Header />
        <StickyHeader />
        <SideLogo hasHeader={true} />
        {foldImage && <FoldImage url={paths.IMAGES_PATH + foldImage.file} alt={foldImage.alt} description={foldImage.description} />}
        <article className="main-content about-content col2" role="main">
          <h1 className="wide9">About</h1>
          {categories.map((category, index) => (
            <section className={about[category][0].attributes} key={index}><h2>{category}</h2>
              <PageContent content={about[category]} path={path}/>
            </section>
          ))}
          <div className="about-logotypes-wrapper">
            <BbcLogo />
            <EaLogo />
            <SegaLogo />
            <TechnipLogo />
          </div>
        </article>
        <BackTop />
      </div>
    </div>
  );
};

AboutPageContent.propTypes = {
  foldImage: PropTypes.object,
  about: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};


export default AboutPageContent;
