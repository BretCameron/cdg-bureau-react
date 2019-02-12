import React, { Component } from 'react'
import './Layout.scss';
import Header from './Header';
// import Hero from './Hero';
import Navigation from './Navigation';
import Footer from './Footer';

export default class Layout extends Component {
    render() {
        return (
            <div id="layout">
                <div id="layout-main">
                    <Header />
                    <Navigation />
                    {/* <Router /> */}
                </div>
                <div id="layout-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
