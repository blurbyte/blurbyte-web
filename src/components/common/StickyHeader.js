import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

//import components
import StickyHeaderContent from './StickyHeaderContent';

class SideLogo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menuExpanded: false
    };

    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  onHamburgerClick(event) {
    event.preventDefault();
    //hamburger menu toggle
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  render() {
    const {scroll} = this.props;
    return (
      <StickyHeaderContent positionTop={scroll.scrollTop} onHamburgerClick={this.onHamburgerClick} expanded={this.state.menuExpanded}/>
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
