import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../../frontend_utils';

export default ({ data }) => {
  let bongdong = "$";
  let dingLa = "";
  for (var i = 1; i <= data.price; i++) {
    dingLa += bongdong;
  }
  if (dingLa == "") {
    dingLa = "Free";
  }
  return(
    <div className="header-info">
      <div className="sd-header">
        <div className="sd-tags">
          {data.tags}
        </div>

        <div className="sd-name">
          <h2>{data.name}</h2>
        </div>

        <div className="sd-ratings-reviews">
          <span className="rating"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
          <span className="review"> {utils.addCommas(data.numReviews)} Reviews</span>
        </div>
      </div>

      <div className="sd-info-block">
        <div className="sd-caption-detail">
          <span className="caption">
            <i class="fa fa-usd" aria-hidden="true"></i>

            <span className="caption-text">
              Price Range
            </span>
          </span>
          <span className="detail">
            {dingLa}
          </span>
        </div>

        <div className="sd-caption-detail">
          <span className="caption">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span className="caption-text">
              Neighborhood
            </span>
          </span>
          <span className="detail">
            {data.neighborhood}
          </span>
        </div>
      </div>

    </div>
  );
};

// <div className="sd-caption-detail">
//   <span className="caption">
//     <i class="fa fa-phone" aria-hidden="true"></i>
//     <span className="caption-text">
//       Phone
//     </span>
//   </span>
//   <span className="detail">
//     {data.phone}
//   </span>
// </div>
//
// <div className="sd-caption-detail">
//   <span className="caption">
//     <i class="fa fa-map-marker" aria-hidden="true"></i>
//     <span className="caption-text">
//       Address
//     </span>
//   </span>
//   <span className="detail">
//     {data.address}
//   </span>
// </div>
