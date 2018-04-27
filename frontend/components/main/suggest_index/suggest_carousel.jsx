import React from 'react';
import * as rb from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import CarouselCard from './suggest_carousel_card';

export default ({ text, data }) => {

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

          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>
          <CarouselCard data={data}/>

        </OwlCarousel>

      </rb.Col>
    </rb.Row>
  );
};
