import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../../frontend_utils';

export default ({ data }) => {
  return(
    <div className="nav-container">
      <div className="nav-header">
        <rb.Image src="https://i.imgur.com/iwbypjK.png" responsive/>
      </div>

      <div className="nav-item">
        {data.name}
      </div>

      <div className="nav-item">
        <span>{data.address}</span>
        <span><a target="_blank" href={"https://www.google.com/maps/search/" + data.address}>Directions</a></span>
      </div>

      <div className="nav-item">
        <span>{data.phone}</span>
        <span><a href={"tel:+" + data.phone}>Call</a></span>
      </div>

      <div className="nav-item">
        <span>URL</span>
        <span>View</span>
      </div>
    </div>
  );
};
