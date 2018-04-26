import React from 'react';
import * as rb from 'react-bootstrap';
import {
  Question1,
  Question2
} from './actual_questions';

class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      responses: {
        1: null,
        2: null
      }
    };
  }

  saveResponse(questionNumber, option) {
    console.log(questionNumber, option);
  }

  render() {
    const question = "How do you like them apples?";

    const images = [
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
    ];

    const captions = [
      "Lalala",
      "Lalala",
      "Lalala",
      "Lalala"
    ];

    switch (this.state.step) {
      case 0:
        return(
          <Question1
            saveResponse={this.saveResponse}
          />
        );
      case 1:
        return(
          <Question2
            saveResponse={this.saveResponse}
          />
        );
      default:
    }
  }
}

export default Survey;
