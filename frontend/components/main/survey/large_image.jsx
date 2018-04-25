import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ images, captions }) => {
  let options =
    images.map((image, idx) => (
      <rb.Col xs={12} sm={6} className="option-container">
        <div className="option">
          {image}

          <div className="caption">
            {captions[idx]}
          </div>
        </div>
      </rb.Col>
  ));

  return(
    <rb.Row className="survey-answer">
      <rb.Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
        <rb.ListGroup className="all-options">
          {options}
        </rb.ListGroup>
      </rb.Col>
    </rb.Row>
  );
};
