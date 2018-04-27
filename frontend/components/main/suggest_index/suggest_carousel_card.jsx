import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../frontend_utils';

export default ({ data }) => {

  return(

    <section className="carousel-card">
      <img src={data.image}/>
      <div className="tags">{utils.tagParser(data.tags)}</div>
      <div className="name">{data.name}</div>
      <div className="ratings-reviews">
        <span className="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
        <span className="review"> {utils.addCommas(data.numReviews)}</span>
      </div>
    </section>
  );
};
