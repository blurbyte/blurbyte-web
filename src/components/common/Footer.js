import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

//import components
import FooterContent from './FooterContent';

//getWindowHeight
import {getWindowHeight} from '../../utilities/getElementHeight';

//animation breakpoints values
import * as breakpoints from '../../utilities/animationBreakpoints';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getVisibility() {
    const {scroll} = this.props;
    //checking if element is 100px above bottom of the page
    if (scroll && (scroll.scrollHeight - (getWindowHeight() + scroll.scrollTop) < breakpoints.SHOW_FOOTER_BREAKPOPINT)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <FooterContent expanded={this.getVisibility()} />
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
