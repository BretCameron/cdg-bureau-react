import React, { Component, Fragment } from 'react'

export default class Printer extends Component {

    render() {
        return (
            <Fragment>
                <div technology={this.props.technology} className="printer">
                    <div className="printer-text">
                        <div className="printer-headline">
                            <h3>{this.props.printer}</h3>
                            <h4>{this.props.technology}</h4>
                        </div>
                        <hr className="printer-hr" />
                        <p>{this.props.description}</p>
                    </div>
                    <div className="printer-image">
                        <img src={this.props.image} alt={this.props.printer} />
                    </div>
                </div>
            </Fragment>
        );
    }
};
