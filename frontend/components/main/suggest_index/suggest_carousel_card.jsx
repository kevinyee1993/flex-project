import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../frontend_utils';
import { Link } from 'react-router-dom';


//util.stargenerator
export default ({ userData, data, item, type }) => {

  let odds = Math.random();

  return(
    <Link to={`/recommendations/${userData}/${type}/${item.name}`}>
      <section className="carousel-card">
        <img src={item.image}/>
        <div className="tags">{item.tags.split(',  ')}</div>
        <div className="name">{item.name}</div>
        <div className="ratings-reviews">
          <span className="rating">
            { odds > 0.5 ? (
              <div>
              <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
              </div>
            ) : (
              <div>
              <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
            </div>
            )}

          </span>
          <span className="review"> {utils.addCommas(item.numReviews)}</span>
        </div>
      </section>
    </Link>
  );
};

// <span className="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
