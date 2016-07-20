import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components
import AboutPageContent from './AboutPageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';
import * as foldImagesActions from '../../actions/foldImagesActions';
import * as aboutActions from '../../actions/aboutActions';

//lodash
import isEmpty from 'lodash/isEmpty';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

//getFoldImageForGallery select function
import {getFoldImageForGallery} from '../../utilities/getImagesForGallery';

class AboutPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    let {foldImages, about} = this.props;

    //loading foldImages if they don't exist
    if (isEmpty(foldImages)) {
      this.props.actions.loadAllFoldImages()
        .then(() => {
          this.populateGallery(this.props.foldImages);
        })
        .catch(err => {
          console.log(err);
        });
    }
    else if(foldImages) {
      this.populateGallery(this.props.foldImages);
    }

    //loading about content if it is not in store yet
    if (isEmpty(about)) {
      this.props.actions.loadAboutContent();
    }
  }

  componentWillUnmount () {
    this.props.actions.emptyImageGallery();
  }

  populateGallery(foldImages) {
    //populating image gallery with fold image
    let foldImage = foldImages['about'];
    this.props.actions.populateImageGallery(getFoldImageForGallery(foldImage, paths.IMAGES_PATH));
  }

  render() {
    let {foldImages, about} = this.props;
    let foldImage = null;

    //getting about image
    if (!isEmpty(foldImages)) {
      foldImage = foldImages['about'];
    }

    return (
      <AboutPageContent foldImage={foldImage} about={about} path={paths.IMAGES_PATH} />
    );
  }
}

AboutPage.propTypes = {
  foldImages: PropTypes.object,
  about: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
    foldImages: state.foldImages,
    about: state.about
  }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(Object.assign({}, aboutActions, foldImagesActions, imageGalleryActions), dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
