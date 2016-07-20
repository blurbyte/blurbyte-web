import React, {PropTypes} from 'react';
import {Link} from 'react-router';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

const PortfolioProject = ({id, title, description}) => (
  <section className="portfolio-project">
    <h3>{title}</h3>
    <div className="portfolio-project-content">
      <div className="project-thumb wide4"><img src={paths.PROJECTS_PATH + id + '-thumb.jpg'} alt={title} /></div>
      <div className="wide4">
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <Link className="project-link" to={`/portfolio/${id}`}>Discover project</Link>
      </div>
    </div>
  </section>
);

PortfolioProject.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default PortfolioProject;
