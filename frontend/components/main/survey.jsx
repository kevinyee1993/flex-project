import React from 'react';
import * as rb from 'react-bootstrap';

class Survey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dummySentences = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.'
    ];

    return(
      <rb.Grid>
        <rb.Row className="show-grid">
          <rb.Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </rb.Col>
          <rb.Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 4).join(' ')}
          </rb.Col>
          <rb.Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </rb.Col>
          <rb.Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 2).join(' ')}
          </rb.Col>
        </rb.Row>
      </rb.Grid>
    );
  }
}

export default Survey;
