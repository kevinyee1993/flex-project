import React from 'react';
import * as rb from 'react-bootstrap';

class Survey extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBigOptions() {
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

    return(
      images.map((image, idx) => (
        <rb.Col xs={12} sm={6} className="option-container">
          <div className="option">
            {image}

            <div className="caption">
              {captions[idx]}
            </div>
          </div>
        </rb.Col>
      ))
    );

  }

  render() {


    return(

      <rb.Grid>
        <rb.Row className="survey-question">
          <rb.Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
            <br />
            <h3>How do you like them apples?</h3>
          </rb.Col>
        </rb.Row>
        <rb.Row className="survey-answer">
          <rb.Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
            <rb.ListGroup className="all-options">
              {this.renderBigOptions()}
            </rb.ListGroup>
          </rb.Col>
        </rb.Row>
      </rb.Grid>

    );
  }
}

export default Survey;
