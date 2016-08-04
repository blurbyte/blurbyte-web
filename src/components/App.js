import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//common
import FullScreenGallery from './common/FullScreenGallery';
import FullScreenLoader from './common/FullScreenLoader';
import Footer from './common/Footer';
import WelcomeScreen from './common/WelcomeScreen';

//actions
import * as scrollActions from '../actions/scrollActions';

//getElementHeight
import {getElementHeight} from '../utilities/getElementHeight';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      welcomeScreenVisibility: true
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.scrollWrapper.addEventListener('scroll', this.handleScroll);

    //making sure Welcome Screen fires only once
    setTimeout(() => {
      this.setState({ welcomeScreenVisibility: false });
    }, 2000);
  }

  componentWillUnmount() {
    this.scrollWrapper.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    //handles scrollTop in Redux Store
    let scrollTop = event.target.scrollTop;
    let scrollHeight = getElementHeight(event.target);
    this.props.actions.updateScroll({ scrollTop, scrollHeight });
  }

  showWelcomeScreen() {
    const {loading} = this.props;
    const {welcomeScreenVisibility} = this.state;

    if(welcomeScreenVisibility) {
      return true;
    }
    //checking if items are loading but Welcome Screen shouldn't be displayed (after first display)
    else if(loading && !welcomeScreenVisibility) {
      return false;
    }
    else {
      return false;
    }
  }

  render() {
    const {galleryVisibility, loading} = this.props;

    return (
      <div className="app-scroll-wrapper" ref={node => this.scrollWrapper = node}>
        <CSSTransitionGroup transitionName="welcome-screen-fade" transitionEnter={false} transitionLeaveTimeout={8000}>
          {this.showWelcomeScreen() && <WelcomeScreen />}
        </CSSTransitionGroup>
        {loading && <FullScreenLoader />}
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
