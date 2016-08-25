import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//common
import FullScreenGallery from './common/FullScreenGallery';
import FullScreenLoader from './common/FullScreenLoader';
import Footer from './common/Footer';
import WelcomeScreen from './common/WelcomeScreen';
import StickyHeader from './common/StickyHeader';

//actions
import * as scrollActions from '../actions/scrollActions';

//getElementHeight
import {getElementHeight} from '../utilities/getElementHeight';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      welcomeScreenVisibility: true,
      touchmoveAttached: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleTouchstart = this.handleTouchstart.bind(this);
    this.handleTouchmove = this.handleTouchmove.bind(this);
  }

  componentDidMount() {
    this.scrollWrapper.addEventListener('scroll', this.handleScroll);
    //allows iOS to recognize CSS active links state
    document.addEventListener('touchstart', this.handleTouchstart);
    //prevents scrolling on mobile when loading
    document.addEventListener('touchmove', this.handleTouchmove);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      if(this.state.welcomeScreenVisibility) {
        //allows scrolling after WelcomeScreen starts to disappear
        setTimeout(() => {
          document.removeEventListener('touchmove', this.handleTouchmove);
        }, 7000);
      }
      //if initial content has loaded set WelcomeScreen flag to false
      //this way WelcomeScreen shows only once
      this.setState({ welcomeScreenVisibility: false });
    }

    //covers preventing scrolling on mobile devices loading screens after initial load
    if(!this.state.welcomeScreenVisibility) {
      if(nextProps.loading) {
        document.addEventListener('touchmove', this.handleTouchmove);
        this.setState({ touchmoveAttached: true });
      }
      else {
        if(this.state.touchmoveAttached) {
          setTimeout(() => {
            document.removeEventListener('touchmove', this.handleTouchmove);
          }, 1800);
          this.setState({ touchmoveAttached: false });
        }
      }
    }
  }

  componentWillUnmount() {
    this.scrollWrapper.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('touchstart', this.handleTouchstart);
    document.removeEventListener('touchmove', this.handleTouchmove);
  }

  handleScroll(event) {
    //handles scrollTop in Redux Store
    let scrollTop = event.target.scrollTop;
    let scrollHeight = getElementHeight(event.target);
    this.props.actions.updateScroll({ scrollTop, scrollHeight });
  }

  handleTouchstart() {
    //fix for iOS CSS active links behavior
  }

  handleTouchmove(event) {
    event.preventDefault();
  }

  showFullScreenLoader() {
    const {loading} = this.props;
    const {welcomeScreenVisibility} = this.state;
    return welcomeScreenVisibility || !loading ? false : true;
  }

  render() {
    const {galleryVisibility, children, location} = this.props;
    const {welcomeScreenVisibility} = this.state;

    //loaders and page transition animations
    return (
      <div className="app-scroll-wrapper" ref={node => this.scrollWrapper = node}>
        <StickyHeader />
        <CSSTransitionGroup component="div" transitionName="welcome-screen-fade" transitionEnter={false} transitionLeaveTimeout={8000}>
          {welcomeScreenVisibility && <WelcomeScreen />}
        </CSSTransitionGroup>
        <CSSTransitionGroup component="div" transitionName="full-screen-loader-fade" transitionEnterTimeout={600} transitionLeaveTimeout={1400}>
          {this.showFullScreenLoader() && <FullScreenLoader />}
        </CSSTransitionGroup>
        <CSSTransitionGroup component="div" transitionName="full-screen-fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {galleryVisibility && <FullScreenGallery />}
        </CSSTransitionGroup>
        <CSSTransitionGroup component="div" transitionName="page-transition" transitionEnterTimeout={800} transitionLeave={false}>
          {React.cloneElement(children, { key: location.pathname })}
        </CSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  galleryVisibility: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
