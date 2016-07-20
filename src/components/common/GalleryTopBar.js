import React, {PropTypes} from 'react';

//common
import CloseButton from './CloseButton';
import GalleryImageCounter from './GalleryImageCounter';

const GalleryTopBar = ({images, currentImageIndex, onCloseBtnClick}) => (
  <div className="full-screen-gallery-top-bar">
    {images.length > 1 && <GalleryImageCounter currentImageIndex={currentImageIndex} totalImages={images.length}/>}
    <CloseButton onCloseBtnClick={onCloseBtnClick} />
  </div>
);

GalleryTopBar.propTypes = {
  images: PropTypes.array.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired
};

export default GalleryTopBar;
