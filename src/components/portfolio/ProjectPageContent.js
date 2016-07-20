import React, {PropTypes} from 'react';

//common components
import SideLogo from '../common/SideLogo';
import BackTop from '../common/BackTop';
import PageContent from '../common/PageContent';

const ProjectPageContent = ({project, path}) => {
  return (
    <div className="bgr-wrapper no-header">
      <div className="wrapper">
        <SideLogo />
        <article className="main-content project-content col2" role="main">
          <header className="wide9">
            <h1>{project.title}</h1>
            <h2>{project.category}</h2>
          </header>
          <PageContent content={project.content} path={path} />
        </article>
        <BackTop />
      </div>
    </div>
  );
};

ProjectPageContent.propTypes = {
  project: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default ProjectPageContent;
