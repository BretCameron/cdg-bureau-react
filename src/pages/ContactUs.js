import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../components/MapContainer';

export default class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <h2>Contact Us</h2>

        <div className="flex-contact">
          <div id="GoogleMap">
      {/* <MapContainer /> */}
            <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.746461415689!2d-0.9659520842431356!3d51.150026379578016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48743aeb85eb5323%3A0x1c7bbab88d8bd956!2sConcurrent+Design+Group!5e0!3m2!1sen!2suk!4v1550080450253" width="100%" height="450" frameborder="0"></iframe>
          </div>
          <div>
            <ul>
              <li><b>Address:</b></li>
              <li>Concurrent Design Group</li>
              <li>3 Oriel Court</li>
              <li>Omega Park</li>
              <li>Alton</li>
              <li>Hants</li>
              <li>GU34 2YT</li>
              <li>United Kingdom</li>
            </ul>
            <ul>
              <li><b>Tel:</b> 44 (0)1420 88645</li>
              <li><b>Fax:</b> 44 (0)1420 88629</li>
            </ul>
            <ul>
              <li><b>Business Enquiries:</b> info@cdg.uk.com</li>
              <li><b>Support:</b> support@cdg.uk.com</li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}