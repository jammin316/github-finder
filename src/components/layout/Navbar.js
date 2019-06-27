import React, { Component } from 'react';
import PropTypes from 'prop-types'; // for type-checking

export class Navbar extends Component {
  //
  // defaultProps: A failsafe in case there's no props in app.js
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    // checks to see if title and icon are strings
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
