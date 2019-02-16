// Credit to Ross Bulat for this code, which I have lightly edited
// https://medium.com/@rossbulat/lazy-image-loading-in-react-the-full-breakdown-4026619de2df

import React, { Component } from 'react'

const _loaded = {};

export default class ImageLoader extends Component {
  //initial state: image loaded stage 
  state = {
    loaded: _loaded[this.props.src]
  };

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded"
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {

    let className = this.props.className;

    className = `${this.props.className}${this.state.loaded
      ? this.props.loadedClassName
      : this.props.loadingClassName}`;

    return <img
      src={this.props.src}
      onClick={this.props.onClick}
      className={className}
      onLoad={this.onLoad}
      alt={this.props.alt} />;
  }
}