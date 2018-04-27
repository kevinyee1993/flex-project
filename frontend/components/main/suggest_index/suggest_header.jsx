import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ text }) => (
  <rb.Row className="suggest-header">
    <rb.Col xs={12} >
      <h3>{text}</h3>
    </rb.Col>
  </rb.Row>
);
