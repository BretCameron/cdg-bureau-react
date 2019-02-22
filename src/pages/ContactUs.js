import React, { Component, Fragment } from 'react';
import { Map } from '../components/map';

export default class ContactUs extends Component {

  render() {
    return (
      <Fragment>
        <h2>Contact Us</h2>
        <p>We offer global shipping. Our parts are printed in and shipped from the UK.</p>
        <Map
          id="myMap"
          options={{
            center: { lat: 53.5, lng: -0.9691278 },
            zoom: 5
          }}
          onMapLoad={map => {
            var alton = new window.google.maps.Marker({
              position: { lat: 51.1513724, lng: -0.9691278 },
              map: map,
              title: 'Alton Headquarters'
            });
            var manchester = new window.google.maps.Marker({
              position: { lat: 53.472225, lng: -2.2935023 },
              map: map,
              title: 'Manchester Office'
            });
          }}
        />
        <br />
        <h3>Our Headquarters</h3>
        <div className="flex-contact">
          <div id="GoogleMap">
            <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.746461415689!2d-0.9659520842431356!3d51.150026379578016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48743aeb85eb5323%3A0x1c7bbab88d8bd956!2sConcurrent+Design+Group!5e0!3m2!1sen!2suk!4v1550080450253" width="100%" height="450" frameborder="0"></iframe>
          </div>
          <div>
            <p>Replik8 is a trading name<br />of Concurrent Design Group.</p>
            <ul>
              <li><b>Address:</b></li>
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
              <li><b>Email:</b> info@replik8.co.uk</li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}