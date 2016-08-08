import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//import components
import BackTopLink from './BackTopLink';

//getWindowHeight
import {getWindowHeight} from '../../utilities/getElementHeight';

//scrollTo utility function
import {scrollTo} from '../../utilities/scrollTo';

//animation breakpoints values
import * as breakpoints from '../../utilities/animationBreakpoints';

class BackTop extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onBackTopClick = this.onBackTopClick.bind(this);
  }

  getVisibility() {
    const {scroll} = this.props;
    //checking if element is 100px above bottom of the page
    if (scroll && (scroll.scrollHeight - (getWindowHeight() + scroll.scrollTop) < breakpoints.SHOW_FOOTER_BREAKPOPINT)) {
      return true;
    }
    return false;
  }

  onBackTopClick() {
    //scrolling to top of the page
    const position = 0;
    const duration = 400;
    scrollTo(document.querySelector('.app-scroll-wrapper'), position, duration);

    //hiding SideLogo when scrolling up
    const sideLogo = document.querySelector('.side-logo-wrapper');
    sideLogo.classList.add('hidden');
    //showing SideLogo after ~1sec
    setTimeout(() => {
      sideLogo.classList.remove('hidden');
    }, duration * 2);
  }

  render() {
    return (
      <CSSTransitionGroup transitionName="simple-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
        {this.getVisibility() && <BackTopLink onBackTopClick={this.onBackTopClick} />}
      </CSSTransitionGroup>
    );
  }
}

BackTop.propTypes = {
  scroll: PropTypes.object
};

const mapStateToProps = (state) => (
  { scroll: state.scroll }
);

export default connect(mapStateToProps)(BackTop);
