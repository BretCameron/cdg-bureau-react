import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GetAQuote from './pages/GetAQuote';
import OurTechnologies from './pages/OurTechnologies';
import OurMaterials from './pages/OurMaterials';
import FAQ from './pages/FAQ';
import ExampleParts from './pages/ExampleParts';
import ContactUs from './pages/ContactUs';
// import Hero from './Hero';
// import Logo from './Replik8.svg';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul id="nav-list">
                            <div className="container">
                                <li><Link to="/"><span role="img" aria-label="emoji">🏠</span> Get a Quote</Link></li>
                                <li><Link to="/technologies"><span role="img" aria-label="emoji">🤖</span>Technologies</Link></li>
                                <li><Link to="/materials"><span role="img" aria-label="emoji">🏺</span>Materials</Link></li>
                                <li><Link to="/faq"><span role="img" aria-label="emoji">❓</span> FAQ</Link></li>
                                <li><Link to="/example-parts"><span role="img" aria-label="emoji">🔩</span> Example Parts</Link></li>
                                <li><Link to="/contact-us"><span role="img" aria-label="emoji">📝</span> Contact Us</Link></li>
                                <hr />
                            </div>
                        </ul>
                        <div className="container">
                            <Route exact path="/" component={GetAQuote} />
                            <Route exact path="/technologies" component={OurTechnologies} />
                            <Route exact path="/materials" component={OurMaterials} />
                            <Route exact path="/faq" component={FAQ} />
                            <Route exact path="/example-parts" component={ExampleParts} />
                            <Route exact path="/contact-us" component={ContactUs} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
