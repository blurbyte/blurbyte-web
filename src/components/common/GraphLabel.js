import React, {PropTypes} from 'react';

const GraphLabel = ({index, text}) => {
  const textItems = text.split('/');
  return (
    <p className={`graph-label label-${index}`}>
      {
        textItems.map((item, index) => <span key={index}>{item}</span>)
      }
    </p>
  );
};

GraphLabel.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default GraphLabel;
