import React, {PropTypes} from 'react';

//common components
import Header from '../common/Header';
import SideLogo from '../common/SideLogo';
import FoldImage from '../common/FoldImage';
import BackTop from '../common/BackTop';

//portfolio components
import PortfolioProjectsList from './PortfolioProjectsList';

const PortfolioPageContent = ({foldImage, projects, path}) => (
  <div className="bgr-wrapper">
    <div className="wrapper">
      <Header />
      <SideLogo />
      {foldImage && <FoldImage url={path + foldImage.file} alt={foldImage.alt} description={foldImage.description} />}
      {projects && <PortfolioProjectsList projects={projects} />}
      <BackTop />
    </div>
  </div>
);

PortfolioPageContent.propTypes = {
  foldImage: PropTypes.object,
  projects: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default PortfolioPageContent;
