import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

//component
import NotFoundPageContent from './NotFoundPageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';

class NotFoundPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    //fake action dispatch to hide loading screen
    this.props.dispatch(imageGalleryActions.allImagesLoaded());
  }

  render() {
    return (
      <NotFoundPageContent />
    );
  }
}

NotFoundPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(NotFoundPage);
