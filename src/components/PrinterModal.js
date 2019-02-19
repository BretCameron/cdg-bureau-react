import React, { Component } from 'react'
// import LazyLoad from 'react-lazyload'
import ImageLoader from '../components/ImageLoader'

export default class PrinterModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-image">
          <ImageLoader src={this.props.image} alt={this.props.printer} />
        </div>
        <h1>{this.props.printer}</h1>
        {/* <h4>{this.props.technology}</h4> */}
        <p>{this.props.description}</p>
      </div>
    )
  }
}

// There needs to be a page-level state called modalOpen, and if any modal is open is triggers this state. Another modal cannot then be opened until the first one is closed.

// Any way to move between modals, like a slider? Maybe have to push the state higher up, and have something like Omni { open: false }