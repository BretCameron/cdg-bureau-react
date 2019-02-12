import React, { Component, Fragment } from 'react'

export default class Printer extends Component {

    render() {
        return (
            <Fragment>
                <div technology={this.props.technology} className="printer">
                    <h3>{this.props.printer}</h3>
                    <h4>{this.props.technology}</h4>
                    <p>{this.props.description}</p>
                    <img className="printer-img" src={this.props.image} alt={this.props.printer} />
                </div>
            </Fragment>
        );
    }
};
