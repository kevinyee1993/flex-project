import React from 'react';
import * as rb from 'react-bootstrap';

class SuggestDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // dummy data for suggest_detail
    const dummy_data = {
      image: "https://images.unsplash.com/photo-1516712109157-6a67f5d73fa1?w=500",
      name: "Hipster Bullshit",
      tags: ["Bitch", "Weird"],
      rating: 4.5,
      numReviews: 1234
    };

    return(
      <rb.Grid>
        i am suggest detail
      </rb.Grid>
    );
  }
}

export default SuggestDetail;
