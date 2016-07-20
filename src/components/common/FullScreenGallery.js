import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components
import FullScreenGalleryContent from './FullScreenGalleryContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';

//lodash
import findIndex from 'lodash/findIndex';

class FullScreenGallery extends React.Component {
  constructor(props, content) {
    super(props, content);

    this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onCloseBtnClick(e) {
    e.preventDefault();
    this.props.actions.hideImageGallery();
  }

  onImageClick() {
    const {images, currentImageIndex} = this.props;

    let nextImageIndex = currentImageIndex + 1;
    if(nextImageIndex >= images.length) {
      nextImageIndex = 0;
    }

    const nextImage = images[nextImageIndex];

    //setting new currentImage in store if there are more than 1 image in gallery
    if(images.length > 1) {
      this.props.actions.showNextImageWithTimeout(nextImage.file);
    }
  }

  render() {
    const {images, currentImageIndex} = this.props;
    return (
      <FullScreenGalleryContent onCloseBtnClick={this.onCloseBtnClick} onImageClick={this.onImageClick} images={images} currentImageIndex={currentImageIndex} />
    );
  }
}

const getCurrentImageIndex = (currentImage, imageGallery) => {
  let currentImageIndex = findIndex(imageGallery, {file: currentImage});
  return currentImageIndex < 0 ? 0 : currentImageIndex;
};

FullScreenGallery.propTypes = {
  images: PropTypes.array.isRequired,
  currentImageIndex: PropTypes.number,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const {currentImage, imageGallery} = state;
  return {
    images: imageGallery,
    currentImageIndex: getCurrentImageIndex(currentImage, imageGallery)
  };
};

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(imageGalleryActions, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenGallery);
