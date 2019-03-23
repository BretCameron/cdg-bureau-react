import React, { Component, Fragment } from 'react'
import LazyLoad from 'react-lazyload'
import ImageLoader from '../components/ImageLoader'

export default class Printer extends Component {

  render() {

    return (
      <Fragment>
        <div onClick={this.props.handlePrinterClick} index={this.props.index} technology={this.props.technology} className="printer">
          <div className="printer-text">
            <div className="printer-headline">
              <h3>{this.props.printer}</h3>
              <h4>{this.props.technology}</h4>
            </div>
            <hr className="printer-hr" />
            <div dangerouslySetInnerHTML={{__html: this.props.description}} />
          </div>
          <div className="printer-image">
          {/* {console.log(this.props.image)} */}
            <LazyLoad width="100%" >
              <ImageLoader src={this.props.image} alt={this.props.printer} />
            </LazyLoad>
          </div>
        </div>
      </Fragment>
    );
  }
};
