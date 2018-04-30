import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../frontend_utils';
import { Link } from 'react-router-dom';

export default ({ userData, data }) => {

  return(

    <Link to={`/recommendations/${userData}/1`}>
      <section className="carousel-card">
        <img src={data.image}/>
        <div className="tags">{data.tags.split(',  ')}</div>
        <div className="name">{data.name}</div>
        <div className="ratings-reviews">
          <span className="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
          <span className="review"> {utils.addCommas(data.numReviews)}</span>
        </div>
      </section>
    </Link>
  );
};
