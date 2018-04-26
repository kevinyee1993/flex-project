import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ options, questionNumber, saveResponse }) => {
  let parsedOptions =
    options.map((option, idx) => (
      <rb.ListGroupItem className="text-option" key={idx} onClick={() => saveResponse(questionNumber, idx)}>
        {option}
      </rb.ListGroupItem>
  ));

  return(
    <rb.Row className="survey-answer">
      <rb.Col xs={12} sm={10} smOffset={1}>
        <rb.ListGroup className="all-options text">
          {parsedOptions}
        </rb.ListGroup>
      </rb.Col>
    </rb.Row>
  );
};
