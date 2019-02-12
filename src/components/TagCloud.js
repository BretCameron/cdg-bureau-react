import React, { Component } from 'react';

//TagCloud accepts an array, and converts it to tags

export default class TagCloud extends Component {
    render() {
        return (
            <div>
                {this.props.array.map((el, index) => <button id={el} onClick={this.props.handleClick} className="tag" key={index}>{el}</button>)}
            </div>
        )
    }
}
