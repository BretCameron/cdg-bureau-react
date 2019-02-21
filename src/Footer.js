import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Replik8.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <hr /> */}
        {/* <h3>© CDG 2019</h3> */}
        {/* <p>Replik8 is a trading name of Concurrent Design Group</p> */}
        <div className="container">
          <div className="flex-footer">
            <div className="column">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="column">
              <h4>3D Printed Parts &amp; Additive <br />Manufacturing Services</h4>
              <ul>
                <li>www.replik8.com</li>
                <li><a href="mailto:info@replik8.com" target="_blank" rel="noopener noreferrer">info@replik8.com</a></li>
              </ul>
            </div>
            <div className="column">
              <h4>Links</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
            <div className="column">
              <h4>Our Sister Sites</h4>
              <ul>
                <li><a href="https://www.cdg.uk.com" target="_blank" rel="noopener noreferrer"><i className="no-underline">3D Printer Serivces</i><br />www.cdg.uk.com</a></li>
                <br />
                <li><a href="https://www.cdg.uk.com" target="_blank" rel="noopener noreferrer"><i >3D Printer Sales</i><br />www.relpik8.co.uk</a></li>
              </ul>
              {/* <li><a href="https://www.replik8.co.uk" target="_blank" rel="noopener noreferrer">3d printer sales: www.replik8.co.uk</a></li>
              <li><a href="https://www.3dsystems.com" target="_blank" rel="noopener noreferrer">www.3dsystems.com</a></li>
              */}
            </div>
          </div>
        </div>
      </footer >
    )
  }
}
