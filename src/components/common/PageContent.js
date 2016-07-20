import React, {PropTypes} from 'react';

//components
import Image from './Image';
import Graph from './Graph';

const PageContent = ({content, path}) => {
  let sections = [];
  if(content) {
    content.map((section, index) => {
      switch(section.type) {
        case 'text':
          sections.push(<div key={index} className={section.attributes} dangerouslySetInnerHTML={{__html: section.markdown}} />);
          break;
        case 'image':
          sections.push(<Image key={index} url={path + section.file} attributes={section.attributes} alt={section.alt} />);
          break;
        case 'graph':
          sections.push(<Graph key={index} category={section.category} labels={section.labels} description={section.description} />);
          break;
      }
    });
  }

  return (<div>{sections}</div>);
};

PageContent.propTypes = {
  content: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired
};

export default PageContent;
