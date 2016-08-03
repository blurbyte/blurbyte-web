import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//import components
import FooterContent from './FooterContent';

//getWindowHeight
import {getWindowHeight} from '../../utilities/getElementHeight';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getVisibility() {
    const {scroll} = this.props;
    //checking if element is 100px above bottom of the page
    if(scroll && (scroll.scrollHeight - (getWindowHeight() + scroll.scrollTop) < 90)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <CSSTransitionGroup component="div" className="animated-footer" transitionName="footer-fade-up" transitionEnterTimeout={1000} transitionLeave={false}>
        {this.getVisibility() && <FooterContent />}
      </CSSTransitionGroup>
    );
  }
}

Footer.propTypes = {
  scroll: PropTypes.object
};

const mapStateToProps = (state) => (
  { scroll: state.scroll }
);

export default connect(mapStateToProps)(Footer);
