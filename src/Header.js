import React, { Component } from 'react';
// import Logo from './Replik8.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container" onClick={this.props.closeNavbar}>
          <Link to="/">
            <img id="logo" src={require('./images/replik8.png')} alt="Logo" />
            {/* <p id="byline">3D Printing Bureau</p> */}
          </Link>
        </div>
      </header>
    )
  }
}