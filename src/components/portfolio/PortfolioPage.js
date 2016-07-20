import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import components
import PortfolioPageContent from './PortfolioPageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';
import * as foldImagesActions from '../../actions/foldImagesActions';
import * as projectsActions from '../../actions/projectsActions';

//lodash
import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

//getFoldImageForGallery select function
import {getFoldImageForGallery} from '../../utilities/getImagesForGallery';

class PortfolioPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    let {foldImages, projects} = this.props;

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

    //loading projects if they dont't exist
    if (isEmpty(projects)) {
      this.props.actions.loadAllProjects();
    }
  }

  componentWillUnmount() {
    this.props.actions.emptyImageGallery();
  }

  populateGallery(foldImages) {
    //populating image gallery with fold image
    let foldImage = foldImages['portfolio'];
    this.props.actions.populateImageGallery(getFoldImageForGallery(foldImage, paths.IMAGES_PATH));
  }

  render() {
    let {foldImages, projects} = this.props;
    let foldImage = null;

    //getting portfolio image
    if (!isEmpty(foldImages)) {
      foldImage = foldImages['portfolio'];
    }

    return (
      <PortfolioPageContent foldImage={foldImage} projects={projects} path={paths.IMAGES_PATH} />
    );
  }
}

PortfolioPage.propTypes = {
  foldImages: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
    foldImages: state.foldImages,
    projects: groupBy(state.projects, 'category')
  }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(Object.assign({}, foldImagesActions, projectsActions, imageGalleryActions), dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
