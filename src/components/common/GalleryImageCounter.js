import React, {PropTypes} from 'react';
import CSSTransitionReplace from 'react-css-transition-replace';

//common
import GalleryCounterCurrentIndex from './GalleryCounterCurrentIndex';

const GalleryImageCounter = ({currentImageIndex, totalImages}) => (
  <div className="gallery-img-counter">
    <CSSTransitionReplace transitionName="gallery-current-index-fade" transitionEnterTimeout={600} transitionLeaveTimeout={400}>
      <GalleryCounterCurrentIndex key={currentImageIndex} currentImageIndex={currentImageIndex} />
    </CSSTransitionReplace>
    <span className="separator-dash">&mdash;</span><span>{totalImages}</span>
  </div>
);

GalleryImageCounter.propTypes = {
  currentImageIndex: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired
};

export default GalleryImageCounter;
