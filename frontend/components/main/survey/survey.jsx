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
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null
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
          <Question.Zero
            saveResponse={this.saveResponse}
          />
        );
      case 1:
        return(
          <Question.One
            saveResponse={this.saveResponse}
          />
        );
      case 2:
        return(
          <Question.Two
            saveResponse={this.saveResponse}
          />
        );
      case 3:
        return(
          <Question.Three
            saveResponse={this.saveResponse}
          />
        );
      case 4:
        return(
          <Question.Four
            saveResponse={this.saveResponse}
          />
        );
      case 5:
        return(
          <Question.Five
            saveResponse={this.saveResponse}
          />
        );
      case 6:
        return(
          <Question.Six
            saveResponse={this.saveResponse}
          />
        );
      case 7:
        return(
          <Question.Seven
            saveResponse={this.saveResponse}
          />
        );
      case 8:
        return(
          <Question.Eight
            saveResponse={this.saveResponse}
          />
        );
      case 9:
        return(
          <Question.Nine
            saveResponse={this.saveResponse}
          />
        );
      case 10:
        return(
          <Question.Ten
            saveResponse={this.saveResponse}
          />
        );
      default:
    }
  }
}

export default Survey;
