import React, { Component, Fragment } from 'react';

//TagCloud accepts an array, and converts it to tags


export default class TagCloud extends Component {
    render() {
        return (
            <Fragment>
                <div>{this.props.array.map((el, index) => <button id={el} onClick={this.props.handleClick} onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave} className="tag" key={index}>{el}</button>)}
                    <div id="definition">{this.props.definition}</div>
                </div>
            </Fragment>
        )
    }
}
