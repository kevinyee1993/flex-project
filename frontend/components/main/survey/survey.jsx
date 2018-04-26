import React from 'react';
import * as rb from 'react-bootstrap';
import * as Question from './actual_questions';

class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.saveResponse = this.saveResponse.bind(this);
    this.state = {
      step: 0,
      responses: {
        1: null,
        2: null
      }
    };
  }

  saveResponse(questionNumber, option) {
    let responses = this.state.responses;
    responses[questionNumber] = option + 1;
    this.setState({ responses });

    this.nextStep();
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    switch (this.state.step) {
      case 0:
        return(
          <Question.One
            saveResponse={this.saveResponse}
          />
        );
      case 1:
        return(
          <Question.Two
            saveResponse={this.saveResponse}
          />
        );
      case 2:
        return(
          <Question.Three
            saveResponse={this.saveResponse}
          />
        );
      case 3:
        return(
          <Question.Four
            saveResponse={this.saveResponse}
          />
        );
      case 4:
        return(
          <Question.Five
            saveResponse={this.saveResponse}
          />
        );
      case 5:
        return(
          <Question.Six
            saveResponse={this.saveResponse}
          />
        );
      case 6:
        return(
          <Question.Seven
            saveResponse={this.saveResponse}
          />
        );
      default:
    }
  }
}

export default Survey;
