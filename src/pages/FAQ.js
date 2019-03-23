import React, { Component } from 'react'
import QuestionBlock from '../components/QuestionBlock';
import questions from '../data/questions';

// Define initial state
const initialState = { questions: {}, data: {} };

// Populate initial state with values for '../data/questions.js'
// Object.values(questions).map((el, index) => mapAnswers(el, index));

// Open the first answer, keep the rest closed
// function mapAnswers(el, index) {
//     initialState.questions[`question${index}`] = index === 0 ? true : false;
// };

export default class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleClick = this.handleClick.bind(this);this.fetchPostData = this.fetchPostData.bind(this);
        this.createFAQ = this.createFAQ.bind(this);
    }

    componentDidMount() {
      this.fetchPostData();
    }

    fetchPostData() {
      fetch(`http://localhost/headless-cms/wp-json/wp/v2/faq?per_page=100`)
      .then(response => response.json())
      .then(myJSON => {
        let objLength = Object.keys(myJSON).length;
        for (let i = 0; i < objLength; i++) {
          let objKey = Object.values(myJSON)[i].title.rendered;
          let newState = this.state;
          newState.data[objKey] = Object.values(myJSON)[i].content.rendered;
          console.log(newState);
          this.setState(newState);

        }
      })
    }

    createFAQ() {
      if (!this.state.data) {
        return (
          <div>Fetching data...</div>
        )
      } else {
      return (
        Object.entries(this.state.data).map((el, index) => <QuestionBlock key={index} id={index} question={el[0]} answer={el[1]} handleClick={this.handleClick} open={this.state.questions[`question${index}`]} />)
      )
      }

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
                <div className="question-block">{this.createFAQ()}</div>
            </div>
        )
    }
}
