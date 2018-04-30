import React from 'react';
import * as rb from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import CarouselCard from './suggest_carousel_card';

export default ({ text, data }) => {
  for (var i = 0; i < 6; i++) {
    data[i].tags = data[i].tags.split(', ');
  }
  const allCards = data.slice(0,5).map(datum => (<CarouselCard data={datum}/>));
  return(

    <rb.Row className="suggest-carousel">
      <rb.Col xs={12} >
        <OwlCarousel
          margin={15}
          nav
          navText={[
           "<i class='fa fa-chevron-left'></i>",
           "<i class='fa fa-chevron-right'></i>"
          ]}
          responsive={{
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 4
            }
          }}
          >
          {allCards}

        </OwlCarousel>

      </rb.Col>
    </rb.Row>
  );
};
