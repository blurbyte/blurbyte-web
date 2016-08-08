import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

//import components
import StickyHeaderContent from './StickyHeaderContent';

class SideLogo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {scroll} = this.props;
    return(
      <StickyHeaderContent positionTop={scroll.scrollTop}/>
    );
  }
}

SideLogo.propTypes = {
  scroll: PropTypes.object
};

const mapStateToProps = (state) => (
  { scroll: state.scroll }
);

export default connect(mapStateToProps)(SideLogo);
