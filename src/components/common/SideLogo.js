import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//import components
import SideLogoLink from './SideLogoLink';

//getWindowHeight
import {getWindowHeight} from '../../utilities/getElementHeight';

class SideLogo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getVisibility() {
    const {scroll} = this.props;
    const {hasHeader} = this.props;
    //page doesn't have header
    if(!hasHeader) {
      if(scroll.scrollTop === 0) {
        return true;
      }
      if((getWindowHeight() + scroll.scrollTop) > scroll.scrollHeight - 400) {
        return false;
      }
      return true;
    }
    //page has header
    else if(hasHeader && (scroll && scroll.scrollTop > 860) && ((getWindowHeight() + scroll.scrollTop) < scroll.scrollHeight - 400)) {
      return true;
    }
    return false;
  }

  render() {
    return(
      <div className="side-logo-wrapper">
        <CSSTransitionGroup transitionName="simple-fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
          {this.getVisibility() && <SideLogoLink />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

SideLogo.propTypes = {
  scroll: PropTypes.object,
  hasHeader: PropTypes.bool
};

const mapStateToProps = (state) => (
  { scroll: state.scroll }
);

export default connect(mapStateToProps)(SideLogo);
