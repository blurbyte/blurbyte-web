import React, {PropTypes} from 'react';

const GalleryCounterCurrentIndex = ({currentImageIndex}) => (
  <span className="gallery-img-counter-current-index">{currentImageIndex + 1}</span>
);

GalleryCounterCurrentIndex.propTypes = {
  currentImageIndex: PropTypes.number.isRequired
};

export default GalleryCounterCurrentIndex;
