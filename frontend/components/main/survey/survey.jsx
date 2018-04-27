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
      "nightlife": null,
      "outdoors": null,
      "culture": null,
      "spa/shopping": null,
      "budget": null
    };

    parsedResponse["budget"] = this.state.responses[0] + 1;

    let pairQuestionIndices = [1, 3, 4, 6, 8, 10];
    let pairResponses = {};

    for (var key in this.state.responses) {
      if (pairQuestionIndices.includes(parseInt(key))) {
        pairResponses[key] = this.state.responses[key];
      }
    }

    let preferenceOrdering = this.generatePreferenceOrdering(pairResponses);

    parsedResponse["nightlife"] = preferenceOrdering["nightlife"];
    parsedResponse["outdoors"] = preferenceOrdering["outdoors"];
    parsedResponse["culture"] = preferenceOrdering["culture"];
    parsedResponse["spa/shopping"] = preferenceOrdering["spa/shopping"];

    console.log(parsedResponse);
    return parsedResponse;
  }

  generatePreferenceOrdering(pairResponses) {
    const pairAssignments = {
      1: ["nightlife", "culture"],
      3: ["spa/shopping", "nightlife"],
      4: ["spa/shopping", "culture"],
      6: ["outdoors", "nightlife"],
      8: ["outdoors", "spa/shopping"],
      10: ["outdoors", "culture"]
    };

    const preferenceHash = {
      "outdoors": 0,
      "spa/shopping": 0,
      "nightlife": 0,
      "culture": 0
    };

    for (var key in pairResponses) {
      if (pairAssignments[key]) {
        preferenceHash[pairAssignments[key][pairResponses[key]]] += 1;
      }
    }

    let sorted = [];

    for (var key in preferenceHash) {
        sorted.push([preferenceHash[key], key]);
    }

    sorted.sort(function(a, b) {
      return a[0] - b[0];
    });

    let preferenceOrdering = {
      "outdoors": null,
      "spa/shopping": null,
      "nightlife": null,
      "culture": null
    };

    sorted.forEach((preference, idx) =>  {
      preferenceOrdering[preference[1]] = idx + 1;
    });

    return preferenceOrdering;
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
