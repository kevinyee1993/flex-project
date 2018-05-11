import React from 'react';
import * as rb from 'react-bootstrap';
//
// <rb.Button className="fb-button"
//   ><i class="fa fa-facebook" aria-hidden="true"></i></rb.Button>
export default ({ source }) => {

  return(
      <rb.Col xs={12} sm={4} className="action-sidebar">
        <div className="action-sidebar-container">
          <rb.Button className="yelp-button" href={source} target="_blank" block>
            <i class="fa fa-yelp" aria-hidden="true"></i> &nbsp;
              Read Reviews on Yelp
            </rb.Button>
            <div className="social-share">
              <rb.Button target="_blank" className="twitter-button"
                href={"https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20activity%20in%20SF!"}>
                <i class="fa fa-twitter" aria-hidden="true"></i></rb.Button>
              <rb.Button target="_blank" className="mail-button"
                href="mailto:?subject=Check out this cool activity in SF!&amp;body=Check out this site http://www.website.com.">
                <i class="fa fa-envelope" aria-hidden="true"></i></rb.Button>
            </div>
          </div>
          </rb.Col>
  );
};
