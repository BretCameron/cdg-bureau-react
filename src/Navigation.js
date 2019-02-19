import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './style.scss';
import Header from './Header';
import Footer from './Footer';
import Logo from './Replik8.svg';
import GetAQuote from './pages/GetAQuote';
import OurTechnologies from './pages/OurTechnologies';
import OurMaterials from './pages/OurMaterials';
import FAQ from './pages/FAQ';
import ExampleParts from './pages/ExampleParts';
import ContactUs from './pages/ContactUs';
import NoMatch from './pages/NoMatch';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      scrollY: 0,
    };
    this.clickNavbar = this.clickNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.listenToScroll = this.listenToScroll.bind(this);
  }

  clickNavbar() {
    const newState = this.state;
    newState.navbarOpen = !this.state.navbarOpen;
    this.setState(newState);
  }

  closeNavbar() {
    const newState = this.state;
    newState.navbarOpen = false;
    this.setState(newState);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const state = this.state;
    state.scrollY = winScroll;
    this.setState(state);
  }

  render() {
    return (
      <BrowserRouter>
        <div id="layout">
          <div id="layout-main">
            <div>
              <Header />
              <ul id="nav-list">
                <div className="nav-container">
                  <li id="mobile-menu" onClick={this.clickNavbar}>≡
                  </li>
                  <div className={this.state.navbarOpen ? 'nav-open' : 'nav-closed'}>
                    <div className="nav-flex">
                      <div className="nav-flex-left">
                        <Link to="/">
                          <img id="nav-logo" src={Logo} alt="Logo" />
                        </Link>
                      </div>
                      <div className="nav-flex-right">
                        <div className="inline-block" onClick={this.closeNavbar}>
                          <Link to="/">
                            <li>Get a Quote</li>
                          </Link>
                        </div>
                        <div className="inline-block" onClick={this.closeNavbar}>
                          <Link to="/technologies">
                            <li>Technologies</li>
                          </Link>
                        </div>
                        <div className="inline-block" onClick={this.closeNavbar}>
                          <Link to="/materials">
                            <li>Materials</li>
                          </Link>
                        </div>
                        <div className="inline-block" onClick={this.closeNavbar}>
                          <Link to="/faq">
                            <li>FAQ</li>
                          </Link>
                        </div>
                        <div className="inline-block" onClick={this.closeNavbar}>
                          <Link to="/contact-us">
                            <li>Contact Us</li>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </BrowserRouter >
    )
  }
};