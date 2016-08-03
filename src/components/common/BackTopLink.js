import React, {PropTypes} from 'react';

//import components
import {SlimArrow} from './Icons';

const BackTop = ({onBackTopClick}) => (
  <div className="back-top">
  <a onClick={onBackTopClick}>
    <SlimArrow />
    <p>Back to Top</p>
  </a>
  </div>
);

BackTop.propTypes = {
  onBackTopClick: PropTypes.func.isRequired
};

export default BackTop;
