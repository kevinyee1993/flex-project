import React from 'react';
import * as rb from 'react-bootstrap';
import * as utils from '../../../../frontend_utils';
import ReviewItem from './review_item';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.state = {
      expandedAbout: false,
      showReviews: 5
    };
  }

  parseReviews() {
    let reviewSnippet = this.props.reviews.slice(0, this.state.showReviews);

    return(
      reviewSnippet.map((review, idx) => (
        <li key={`review-${idx}`}>
          <ReviewItem review={review} />
        </li>
      ))
    );
  }

  toggleExpanded() {
    this.setState({ expandedAbout: !this.state.expandedAbout });

    if (this.state.showReviews === 5) {
      this.setState({ showReviews: 10 });
    } else {
      this.setState({ showReviews: 5 });
    }
  }

  render() {
    let toggleText = "+ More Reviews";

    if (this.state.expandedAbout) {
      toggleText = "- Fewer Reviews";
    }

    return(
      <div className="review-block">
        <div className="review-block-header">
          <h4>Reviews</h4>
        </div>
        <ul className="review-index">
          {this.parseReviews()}
        </ul>
        <span className="toggle-btn-reviews" onClick={this.toggleExpanded}>
          {toggleText}
        </span>
      </div>
    );
  }
}

export default Reviews;
