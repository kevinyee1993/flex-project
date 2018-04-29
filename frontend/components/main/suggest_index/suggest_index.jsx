//change this route just checking what's the way to reach this without
//a lot of ..'s'
// const filterData = require('../../../app/util/filter_data');
//
//
// //ok this would work to get the data back, just need to get the query result
// //here and then pass it into params and modify filter_data.js
//
// //depends on where the data from the survey is being returned
//
// //if send user survey data to backend, need to get it back but not sure
// //if we have to persist that user survey data bc no point in keeping it around anymore
// //if keeping around all the user survey data, need to also get that specific
// //info
//
// //rn first param = collection you want to filter from
// //2nd param = query filter
//
// filterData("Activities", { rating: "5.0 star rating" });

import React from 'react';
import * as rb from 'react-bootstrap';
import Header from './suggest_header';
import Carousel from './suggest_carousel';

class SuggestIndex extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.match.params.userData;
    this.state = {
      nameArray: []
    };
  }

  componentDidMount() {

  }

  render() {
    debugger;
    // dummy data for suggest_index
    const dummy_thumbnail = {
      image: "https://images.unsplash.com/photo-1516712109157-6a67f5d73fa1?w=500",
      name: "Hipster Bullshit",
      tags: ["Bitch", "Weird"],
      rating: 4.5,
      numReviews: 1234
    };

    return(
      <rb.Grid>
        <Header text={"Your hotel recommendations, bitch:"} />
        <Carousel text={"CAROUSEL BITCHES"} data={dummy_thumbnail}/>

        <Header text={"Your restaurant recommendations, bitch:"} />
        <Carousel text={"CAROUSEL BITCHES"} data={dummy_thumbnail}/>

        <Header text={"Your activity recommendations, bitch:"} />
        <Carousel text={"CAROUSEL BITCHES"} data={dummy_thumbnail}/>

        <Header text={"More activity recommendations, bitch:"} />
        <Carousel text={"CAROUSEL BITCHES"} data={dummy_thumbnail}/>
      </rb.Grid>
    );
  }
}

export default SuggestIndex;
