import React, {PropTypes} from 'react';

//import components
import PortfolioProject from './PortfolioProject';

const PortfolioProjectsList = ({projects}) => {
  //getting project categories
  const categories = Object.keys(projects);

  //inserting projects into categories
  return (
    <section className="main-content col2 wide9" role="main">
      <h1>Portfolio</h1>
      {categories.map((category, index) => (
        <section className="portfolio-project-category" key={index}><h2 className="portfolio-project-title">{category}</h2>
          {projects[category].map((project, index) => <PortfolioProject key={index} title={project.title} description={project.description} id={project.id} />)}
        </section>
      ))}
    </section>
  );
};

PortfolioProjectsList.propTypes = {
  projects: PropTypes.object.isRequired
};

export default PortfolioProjectsList;
