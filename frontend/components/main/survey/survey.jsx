import React from 'react';
import * as rb from 'react-bootstrap';
import LargeImageOptions from './large_image';
import Question from './question';

class Survey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const question = "How do you like them apples?";

    const images = [
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
      <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
    ];

    const captions = [
      "Lalala",
      "Lalala",
      "Lalala",
      "Lalala"
    ];

    return(
      <rb.Grid>
        <Question question={question} />
        <LargeImageOptions images={images} captions={captions}/>
      </rb.Grid>
    );
  }
}

export default Survey;
