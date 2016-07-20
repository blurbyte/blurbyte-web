import React, {PropTypes} from 'react';
import CSSTransitionReplace from 'react-css-transition-replace';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//common
import GalleryTopBar from './GalleryTopBar';

const FullScreenGalleryContent = ({images, currentImageIndex, onCloseBtnClick, onImageClick}) => {
  const currentImage = images[currentImageIndex];
  const clickable = images.length > 1 ? 'clickable' : '';

  return (
    <div className="full-screen-gallery">
      <CSSTransitionGroup transitionName="bar-fade-down" transitionAppear={true} transitionAppearTimeout={800} transitionEnter={false} transitionLeave={false}>
        <GalleryTopBar images ={images} currentImageIndex={currentImageIndex} onCloseBtnClick={onCloseBtnClick}/>
      </CSSTransitionGroup>
      <div className="full-screen-gallery-img-wrapper">
        <CSSTransitionReplace transitionName="gallery-image-fade" transitionAppear={true} transitionAppearTimeout={1400} transitionEnterTimeout={1500} transitionLeaveTimeout={500}>
          <img key={currentImageIndex} className={clickable} src={currentImage.file} alt={currentImage.alt} onClick={onImageClick} />
        </CSSTransitionReplace>
      </div>
    </div>
  );
};

FullScreenGalleryContent.propTypes = {
  images: PropTypes.array.isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired
};

export default FullScreenGalleryContent;
