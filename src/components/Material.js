import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import ImageLoader from '../components/ImageLoader'

export default class Material extends Component {

  render() {
    return (
      <div className="material-card">
        <div className="material-image">
          <LazyLoad width="100%" >
            <ImageLoader src={this.props.image} alt={this.props.material} />
          </LazyLoad>
        </div>
        <div className="material-text">
          <h3>{this.props.material}</h3>
          <hr />{this.props.variants.map((el, index) => <p key={index} category={this.props.material} id={el} className={this.props.state === el ? 'tag tag-select' : 'tag'} onClick={this.props.handleClick}>{el}</p>)}
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
