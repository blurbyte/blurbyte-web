import React, {PropTypes} from 'react';

//common components
import {CircleGraph} from './GraphsLib';
import GraphLabel from './GraphLabel';

const AboutGraph = ({category, description, labels}) => {
  const itemsCount = labels.length;

  return (
    <div className={`about-graph labels-count-${itemsCount}`}>
      <div className="about-graph-wrapper wide7">
        <CircleGraph category={category} itemsCount={itemsCount} />
        {labels.map((label, i) => <GraphLabel key={i + 1} index={i + 1} text={label} />)}
      </div>
      <div className="about-graph-description" dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
};

AboutGraph.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired
};

export default AboutGraph;
