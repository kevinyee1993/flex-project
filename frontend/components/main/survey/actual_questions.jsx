import React from 'react';
import * as rb from 'react-bootstrap';
import LargeImageOptions from './large_image';
import SmallImageOptions from './small_image';
import Question from './question';

export const One = ({ saveResponse }) => {
  const question = "How do you like them apples?";

  let questionNumber = 1;

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <LargeImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};

export const Two = ({ saveResponse }) => {

  let questionNumber = 2;

  let question = "How do you like them apples?";

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />
      <SmallImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};


export const Three = ({ saveResponse }) => {
  const question = "How do you like them apples?";

  let questionNumber = 3;

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <LargeImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};

export const Four = ({ saveResponse }) => {
  const question = "How do you like them apples?";

  let questionNumber = 4;

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <LargeImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};

export const Five = ({ saveResponse }) => {
  const question = "How do you like them apples?";

  let questionNumber = 5;

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <LargeImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};

export const Six = ({ saveResponse }) => {
  const question = "How do you like them apples?";

  let questionNumber = 6;

  let images = [
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e" alt="option"/>
  ];

  let captions = [
    "Lalala",
    "Lalala",
    "Lalala",
    "Lalala"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <LargeImageOptions
        images={images}
        captions={captions}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};
