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
const axios = require('axios');



class SuggestIndex extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.match.params.userData;
    this.defaultNames = ["Golden Gate Bridge", "Golden Gate Park", "Ferry Building Marketplace", "Dolores Park", "California Academy of Sciences", "Union Square", "Lombard Street"];
    this.state = {
      names: [],
      defaults: [],
      activities: [],
      restaurants: [],
      lodging: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: `/recommendations/${this.userData}`
    }).then((result) => {
      this.setState({names: result.data});
      console.log(result.data);
    });
    this.getRestaurants();
    this.getLodging();
    this.getDefaults();
  }

  getActivities() {
    let name;
    let arr = [];
    let compArr;
    for (var i = 0; i < this.state.names.length; i++) {
      name = this.state.names[i];
      arr.push(axios({
        method: 'GET',
        url: `/activity/${name}`
      }));
    }
    Promise.all(arr).then((response) =>
      {
        compArr = response.map(res => {
          return res.data[0];
        });
        this.setState({activities: compArr});
      });
  }


  getDefaults() {
    let arr = [];
    let compArr;
    let name;
    for (let i = 0; i < this.defaultNames.length; i++) {
      name = this.defaultNames[i];
      arr.push(axios({
        method: 'GET',
        url: `/activity/${name}`
      }));
    }
    Promise.all(arr).then((response) =>
      {
        compArr = response.map(res => {
          return res.data[0];
        });
        this.setState({defaults: compArr});
      });
  }

  getLodging() {
    let budget = this.userData[4];
    axios({
      method: 'GET',
      url: '/lodging'
    }).then((result) => {
      this.setState({lodging: result.data.filter(el => el.price <= budget)});
    });
  }

  getRestaurants() {
    let budget = this.userData[4];
    axios({
      method: 'GET',
      url: '/restaurants'
    }).then((result) => {
      this.setState({restaurants: result.data.filter(el => el.price <= budget)});
    });
  }

  render() {

    // dummy data for suggest_index
    const dummy_thumbnail = {
      image: "https://s3-media1.fl.yelpcdn.com/bphoto/PTV0WeX6QYGr1U2sZsFZjg/1000s.jpg",
      name: "Hipster Bullshit",
      tags: ["Bitch", "Weird"],
      rating: 4.5,
      numReviews: 1234
    };
    if ((this.state.names.length > 0) && this.state.activities.length < 1) {
      this.getActivities();
    }

    if ((this.state.activities.length < 1) || (this.state.restaurants.length < 1) || (this.state.lodging.length < 1) || (this.state.defaults.length < 1)) {
      return (<h1>Loading!</h1>);
    } else {
      return(
        <rb.Grid>
          <Header text={"Our Top Picks:"} />
          <Carousel text={"CAROUSEL BITCHES"} data={this.state.defaults} userData={this.userData}/>
          <Header text={"Your activity recommendations, bitch:"} />
          <Carousel text={"CAROUSEL BITCHES"} data={this.state.activities} userData={this.userData}/>
          <Header text={"Your lodging suxors:"} />
          <Carousel text={"xdxdxd"} data={this.state.lodging} userData={this.userData}/>
          <Header text={"Your restaurant recommendations, bitch:"} />
          <Carousel text={"xdxd"} data={this.state.restaurants} userData={this.userData}/>

        </rb.Grid>
      );
    }

  }
}

export default SuggestIndex;
