import React from 'react';
import * as rb from 'react-bootstrap';
import * as Question from './actual_questions';
import { Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    debugger;
    this.props.history.push(`/recommendations/${Object.values(parsedResponse).join("")}`);
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
      return b[0] - a[0];
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

  // yes i know this is a mess - should refactor, here is a note for self:
  // https://mitchgavan.com/react-quiz/ -YK
  render() {
    switch (this.state.step) {
      case 0:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
              >
              <div key={this.state.step}>
                <Question.Zero
                  saveResponse={this.saveResponse}
                  />
              </div>
            </ReactCSSTransitionGroup>
          </div>
        );
      case 1:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
              >
              <div key={this.state.step}>
                <Question.One
                  saveResponse={this.saveResponse}
                  />
              </div>
            </ReactCSSTransitionGroup>
          </div>
        );
      case 2:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Two
                saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 3:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Three
                saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 4:
        return(
            <div className="question-container">
              <ReactCSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
              >
              <div key={this.state.step}>
                <Question.Four
                  saveResponse={this.saveResponse}
                />
              </div>
            </ReactCSSTransitionGroup>
          </div>
        );
      case 5:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Five
                saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 6:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Six
                saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 7:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
            <Question.Seven
              saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 8:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Eight
                saveResponse={this.saveResponse}
                />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 9:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
            <Question.Nine
              saveResponse={this.saveResponse}
              />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      case 10:
        return(
          <div className="question-container">
            <ReactCSSTransitionGroup
              className="container"
              component="div"
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
            >
            <div key={this.state.step}>
              <Question.Ten
                saveResponse={this.saveResponse}
                />
            </div>
          </ReactCSSTransitionGroup>
        </div>
        );
      default:
    }
  }
}

export default Survey;
