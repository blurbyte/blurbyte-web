import React from 'react';

//import components
import StickyHeaderContent from './StickyHeaderContent';

class StickyHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menuExpanded: false
    };

    this.onHamburgerClick = this.onHamburgerClick.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onHamburgerClick(event) {
    event.preventDefault();
    //hamburger menu toggle
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  onLinkClick() {
    this.setState({ menuExpanded: false });
  }

  render() {
    return (
      <StickyHeaderContent onHamburgerClick={this.onHamburgerClick} onLinkClick={this.onLinkClick} expanded={this.state.menuExpanded}/>
    );
  }
}

export default StickyHeader;
