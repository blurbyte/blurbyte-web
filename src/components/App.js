import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//common
import FullScreenGallery from './common/FullScreenGallery';
import FullScreenLoader from './common/FullScreenLoader';
import Footer from './common/Footer';

//actions
import * as scrollActions from '../actions/scrollActions';

//getElementHeight
import {getElementHeight} from '../utilities/getElementHeight';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.scrollWrapper.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.scrollWrapper.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.target.scrollTop;
    let scrollHeight = getElementHeight(event.target);
    this.props.actions.updateScroll({ scrollTop, scrollHeight });
  }

  render() {
    const {galleryVisibility} = this.props;
    return (
      <div className="app-scroll-wrapper" ref={node => this.scrollWrapper = node}>
        {this.props.loading && <FullScreenLoader />}
        <CSSTransitionGroup transitionName="full-screen-fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {galleryVisibility && <FullScreenGallery />}
        </CSSTransitionGroup>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  galleryVisibility: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const {currentImage, fetchRequestsInProgress, galleryImagesLoaded} = state;
  return (
    {
      galleryVisibility: currentImage.length > 0,
      loading: (fetchRequestsInProgress > 0 || !galleryImagesLoaded) ? true : false
    }
  );
};

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(scrollActions, dispatch) }
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
