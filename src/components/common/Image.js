import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';

//lodash
import reduce from 'lodash/reduce';

//animation breakpoints values
import * as breakpoints from '../../utilities/animationBreakpoints';

class Image extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.showGallery = this.showGallery.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  showGallery(e, url) {
    let windowWidth = window.innerWidth;
    if (windowWidth > breakpoints.SHOW_GALLERY_BREAKPOINT) {
      this.props.actions.showImageGallery(url);
    }
    else {
      return;
    }
  }

  onImageLoad(url) {
    this.props.actions.galleryImageLoaded(url);
    //checking if all other images in gallery are loaded
    const {imageGallery} = this.props;
    const numImagesLoaded = reduce(imageGallery, (result, image) => (image.loaded ? result + 1 : result), 1);
    //if all images are loaded dispatch action
    if (imageGallery.length === numImagesLoaded) {
      this.props.actions.allImagesLoaded();
    }
  }

  render() {
    const {attributes, url, alt} = this.props;
    return (
      <img className={`${attributes ? attributes + ' ' : ''}clickable`} src={url} alt={alt} onClick={(e) => this.showGallery(e, url)} onLoad={() => this.onImageLoad(url)} />
    );
  }
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  attributes: PropTypes.string,
  alt: PropTypes.string,
  imageGallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
    galleryVisibility: state.imageGalleryVisibility,
    imageGallery: state.imageGallery
  }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(imageGalleryActions, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Image);
