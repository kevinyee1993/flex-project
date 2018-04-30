import React from 'react';
import * as rb from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import * as utils from '../../../frontend_utils';

export default ({ photos }) => {

  const parsedPhotos = photos.slice(1,photos.length).map((photo, idx) => {

    return(
      <rb.Image className="photo-carousel-item" responsive src={photo}/>
    );

  });

  return(
      <OwlCarousel
        className="photo-carousel"
        margin={5}
        responsiveClass={"true"}
        responsive={{
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1600: {
            items: 3
          }
        }}
        >

        {parsedPhotos}
      </OwlCarousel>

  );
};
