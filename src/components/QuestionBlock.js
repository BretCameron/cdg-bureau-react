import React, { Component, Fragment } from 'react'

export default class QuestionBlock extends Component {
    render() {
        return (
            <Fragment>
                <div className="question" onClick={this.props.handleClick}>
                    <h3 id={`question${this.props.id}`}>{this.props.question}</h3>
                </div>
                <div className={this.props.open ? 'answer' : 'answer closed'}>
                    <p id={`answer${this.props.id}`}>{this.props.answer}</p>
                </div>
            </Fragment >
        )
    }
}
