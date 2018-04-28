import React from 'react';
import * as rb from 'react-bootstrap';
import PhotoCarousel from './photo_carousel';
import SuggestInfo from './suggest_info';
import ActionSidebar from './action_sidebar';
import SuggestCarousel from '../suggest_index/suggest_carousel';

class SuggestDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // dummy data for suggest_detail
  const dummy_data = { name: 'Piccolo Petes Cafe',
   numReviews: 200,
   address: '2155 Bayshore Blvd San Francisco, CA 94134',
   phone: '(415) 483-6416',
   tags: 'Coffee & Tea, Breakfast & Brunch, Sandwiches',
   rating: '5.0',
   price: 1,
   //thumbnail image
   image: 'https://s3-media4.fl.yelpcdn.com/bphoto/6X4jRyfcrJimfhvckD74Iw/90s.jpg',
   link: 'https://www.yelp.com//biz/piccolo-petes-cafe-san-francisco?osq=restaurants',
   //show page images
   images:
  [ 'https://s3-media4.fl.yelpcdn.com/bphoto/hL5JQzUDA06eqvmUtdUqZA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/hL5JQzUDA06eqvmUtdUqZA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/BYkio9-7yL-qomKaMIZxCg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/RIy6zub_FEna5k24sPuKwA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/xRgxlt2tlgbWqSbwwsUG6w/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/B_GB2Tvu1CxSfTBwix325A/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/QgOiWAmNle4gvGTW9I158Q/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/6D7_zzq9UDExUTF9dhoZjQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/pJb64kG3orkSw9pN8nUe8w/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/jLTThHobGTB7lesdDBz03g/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/jl4UcFYiwTRpYmgsImQ6hg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/f2gWd3qf-CTtPZT0shwvzA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/PpNnujQ3ztSpBKUOhPrLJw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/mExaGWyhxWPF8rgS5MhLLw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/dmIq2GTlQoh_uTr1bzpXpQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/7-W04oAfHEKvjYsNVdi05Q/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/qW8wUfO4kLQoek-PZfLx_A/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/7AijF7RFK3pQa1QFe5aYnQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/RCwwlodZ_BsJjsZrmxkawA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/AqbtCusgRlMRXbJnHuOlTg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/gKknITj4pd5Um4z-VrddXA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/KJgP0ClZixNMS0aAu8J64g/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/D42mAFv47aMv_xD7ZiDkmQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/O4ZwerIEdD7vYOUYKq_kYg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/B3nY9e2RLdid2toQ-Gyxhw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/glj5Pec4tI_gQ_1ot0T1kA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/YIAddVoUMeisRsbPJRlKrA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/i7x-Ub9tW2n5_koberpGdg/o.jpg' ],
    review: "Good stuff"
  };

  const dummy_thumbnail = {
    image: "https://images.unsplash.com/photo-1516712109157-6a67f5d73fa1?w=500",
    name: "Hipster Bullshit",
    tags: ["Bitch", "Weird"],
    rating: 4.5,
    numReviews: 1234
  };

    return(
      <div>
        <PhotoCarousel photos={dummy_data.images}/>
        <rb.Grid className="suggest-detail">
          <rb.Row>
            <SuggestInfo data={dummy_data}/>
            <ActionSidebar source={dummy_data.link}/>
          </rb.Row>
          <rb.Row className="more-recommendations">
            <rb.Col xs={12}>
              <h3>More restaurants for you:</h3>
              <SuggestCarousel data={dummy_thumbnail} />
            </rb.Col>
          </rb.Row>
        </rb.Grid>
      </div>
    );
  }
}

export default SuggestDetail;
