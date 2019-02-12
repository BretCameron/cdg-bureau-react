import React, { Component } from 'react';
import Logo from './Replik8.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <img id='logo' src={Logo} alt='Logo' />
                    {/* <h1>Replik8</h1> */}
                </div>
            </header>
        )
    }
}
