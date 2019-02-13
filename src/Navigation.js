import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './style.scss';
import Header from './Header';
import Footer from './Footer';
import GetAQuote from './pages/GetAQuote';
import OurTechnologies from './pages/OurTechnologies';
import OurMaterials from './pages/OurMaterials';
import FAQ from './pages/FAQ';
import ExampleParts from './pages/ExampleParts';
import ContactUs from './pages/ContactUs';
import NoMatch from './pages/NoMatch';

export default class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="layout">
          <div id="layout-main">
            <div>
              <Header />
              <ul id="nav-list">
                <div className="container">
                  <li>
                    <Link to="/">Get a Quote</Link>
                  </li>
                  <li>
                    <Link to="/technologies">Technologies</Link>
                  </li>
                  <li><Link to="/materials">Materials</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  {/* <li>
                  <Link to="/example-parts"><span role="img" aria-label="emoji">🔩</span> Example Parts</Link>
                </li> */}
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <hr />
                </div>
              </ul>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={GetAQuote} />
                  <Route exact path="/technologies" component={OurTechnologies} />
                  <Route exact path="/materials" component={OurMaterials} />
                  <Route exact path="/faq" component={FAQ} />
                  <Route exact path="/example-parts" component={ExampleParts} />
                  <Route exact path="/contact-us" component={ContactUs} />
                  <Route exact path="/404" component={NoMatch} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </div>
          <div id="layout-footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
};