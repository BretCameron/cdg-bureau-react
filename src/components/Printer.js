import React, { Component, Fragment } from 'react'
import LazyLoad from 'react-lazyload'
import ImageLoader from '../components/ImageLoader'

export default class Printer extends Component {

  render() {

    const backgroundImage = {
      background: 'blue',
    }

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
            <LazyLoad offset="200" width="100%" >
              <ImageLoader src={this.props.image} alt={this.props.printer} />
              {/* <img className="lazy-load" src={this.props.image} alt={this.props.printer} /> */}
            </LazyLoad>
          </div>
        </div>
      </Fragment>
    );
  }
};
