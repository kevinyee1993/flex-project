import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ question }) => (
  <rb.Row className="survey-question">
    <rb.Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
      <h3>{question}</h3>
    </rb.Col>
  </rb.Row>
);
