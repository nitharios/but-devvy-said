/*This is the HEADER component. It has our DevvyCho logo, and the Navigation Bar.*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-navbar">
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><a>New Topic</a></li>
            <li><a>Related</a></li>
          </ul>
        </div>
        <img src='DevvyCho.jpg' width='120' height='90' alt='' />
      </div>
    );
  }



}
//end class

export default Header;