import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>It seems like the page you're looking for doesn't exist!</p>
        <Link to="/"><button>Home</button></Link>
      </div>
    )
  }
}
