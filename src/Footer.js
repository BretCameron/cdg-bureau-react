import React, { Component } from 'react';
import Logo from './Replik8.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    {/* <hr /> */}
                    {/* <h3>© CDG 2019</h3> */}
                    {/* <p>Replik8 is a trading name of Concurrent Design Group</p> */}
                    <div className="flex-footer">
                        <div className="column">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="column">
                            <h4>Looking For 3D Printed Parts &amp; Additive Manufacturing Services?</h4>
                            <ul>
                                <li><a href="https://www.google.com/maps/place/Concurrent+Design+Group/@51.1500297,-0.9659574,17z/data=!3m1!4b1!4m5!3m4!1s0x48743aeb85eb5323:0x1c7bbab88d8bd956!8m2!3d51.1500264!4d-0.9637634" target="_blank" rel="noopener noreferrer">3 Oriel Court, Omega Park, Alton,<br />Hampshire, GU34 2YT, UK</a></li>
                                <li><a href="#">www.replik8.com</a></li>
                                <li><a href="mailto:info@replik8.com" target="_blank" rel="noopener noreferrer">info@replik8.com</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Links</h4>
                            <ul>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Recommended Sites for 3D Printer Sales &amp; Support</h4>
                            <ul>
                                <li><a href="https://www.cdg.uk.com" target="_blank" rel="noopener noreferrer">www.cdg.uk.com</a></li>
                                <li><a href="https://www.replik8.co.uk" target="_blank" rel="noopener noreferrer">www.replik8.co.uk</a></li>
                                <li><a href="https://www.3dsystems.com" target="_blank" rel="noopener noreferrer">www.3dsystems.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
