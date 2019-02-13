import React, { Component } from 'react'

export default class Material extends Component {
    render() {
        return (
            <div className="material-card">
                <div className="material-image">
                    <img src={this.props.image} alt={this.props.material} />
                </div>
                <div className="material-text">
                    <h3>{this.props.material}</h3>
                    <hr />{this.props.variants.map((el, index) => <p key={index} className="tag">{el}</p>)}
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
