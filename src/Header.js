import React, { Component } from 'react';
import Logo from './Replik8.svg';
import { Link } from 'react-router-dom';
// import GetAQuote from './pages/GetAQuote';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Link to="/">
            <img id="logo" src={Logo} alt="Logo" />
            <p id="byline">3D Printing Bureau</p>
          </Link>
        </div>
      </header>
    )
  }
}