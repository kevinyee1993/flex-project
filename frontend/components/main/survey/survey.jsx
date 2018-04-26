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
    responses[questionNumber] = option;
    this.setState({ responses });

    this.nextStep();
  }

  nextStep() {
    if (this.state.step >= 10 ) {
      console.log(this.state);
      this.handleResponse();
    } else {
      this.setState({ step: this.state.step + 1 });
    }
  }

  handleResponse() {
    let parsedResponse = {
      "budget": null,
      "activityPreferences": {
        "outdoors": null,
        "spa/shopping": null,
        "nightlife": null,
        "culture": null
      }
    };

    parsedResponse["budget"] = this.state.responses[0] + 1;

    let pairQuestionIndices = [1, 3, 4, 6, 8, 10];
    let pairResponses = {};

    for (var key in this.state.responses) {
      if (pairQuestionIndices.includes(parseInt(key))) {
        pairResponses[key] = this.state.responses[key];
      }
    }

    this.generatePreferenceOrdering(pairResponses);
  }

  generatePreferenceOrdering(pairResponses) {
    const pairAssignments = {
      1: [3, 4],
      3: [2, 3],
      4: [2, 4],
      6: [1, 3],
      8: [1, 2],
      10: [1, 4]
    };

    const preferenceOrdering = [];

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
