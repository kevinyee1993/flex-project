import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../../frontend_utils';

export default ({ review }) => {
  return(
    <div className="review-item">
      <div className="review-top">
        <rb.Image className="avatar" circle responsive src={review.profilepic}/>
        <span className="username">{review.username}</span>
      </div>
      <div className="review-text">{review.review.split(". ").slice(0, 4).join(". ") + "..."}</div>
    </div>
  );
};
