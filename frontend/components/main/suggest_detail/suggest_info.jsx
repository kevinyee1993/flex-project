import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../frontend_utils';
import HeaderInfo from './suggest_info_components/header_info';
import FromOwner from './suggest_info_components/from_owner';
import Reviews from './suggest_info_components/reviews';

export default ({ data }) => {

  return(
    <rb.Col xs={12} sm={8} className="suggest-info">
      <HeaderInfo data={data} />
      <FromOwner data={data} />
      <Reviews reviews={data.reviews} />
    </rb.Col>
  );
};
