import React from 'react';
import * as rb from 'react-bootstrap';

export default ({ source }) => {

  return(
    <rb.Col xs={12} sm={4} className="action-sidebar">
      <rb.Button block>
        <i class="fa fa-heart" aria-hidden="true"></i> &nbsp;
        Add to Itinerary
      </rb.Button>
      <rb.Button href={source} target="_blank" block>
        <i class="fa fa-yelp" aria-hidden="true"></i> &nbsp;
        Read Reviews on Yelp
      </rb.Button>
      <div className="social-share">
        <rb.Button><i class="fa fa-facebook" aria-hidden="true"></i></rb.Button>
        <rb.Button><i class="fa fa-twitter" aria-hidden="true"></i></rb.Button>
        <rb.Button><i class="fa fa-envelope" aria-hidden="true"></i></rb.Button>
      </div>

    </rb.Col>
  );
};
