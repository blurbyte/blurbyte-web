import React, {PropTypes} from 'react';

//common
import {CloseMark} from './Icons';

const CloseButton = ({onCloseBtnClick}) => (
  <div onClick={onCloseBtnClick} className="close-gallery"><CloseMark /></div>
);

CloseButton.propTypes = {
  onCloseBtnClick: PropTypes.func.isRequired
};

export default CloseButton;
