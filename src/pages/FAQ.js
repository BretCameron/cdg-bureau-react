import React, { Component } from 'react'
import QuestionBlock from '../components/QuestionBlock';
import questions from '../data/questions';

// Define initial state
const initialState = { questions: {} };

// Populate initial state with values for '../data/questions.js'
Object.values(questions).map((el, index) => mapAnswers(el, index));

// Open the first answer, keep the rest closed
function mapAnswers(el, index) {
    initialState.questions[`question${index}`] = index === 0 ? true : false;
};

export default class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const newState = this.state;
        newState.questions[e.target.id] = !newState.questions[e.target.id];
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <h2>FAQ</h2>
                <div className="question-block">
                    {Object.values(questions).map((el, index) => <QuestionBlock key={index} id={index} question={el.question} answer={el.answer} handleClick={this.handleClick} open={this.state.questions[`question${index}`]} />)}
                </div>
            </div>
        )
    }
}
