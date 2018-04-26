import React from 'react';
import * as rb from 'react-bootstrap';
import LargeImageOptions from './options/large_image';
import SmallImageOptions from './options/small_image';
import TextOptions from './options/text';
import Question from './question';

export const One = ({ saveResponse }) => {
  const question = "What's your budget for this trip?";

  let questionNumber = 1;

  let options = [
    "$",
    "$$",
    "$$$",
    "$$$$"
  ];

  return(
    <rb.Grid>
      <Question question={question} />

      <TextOptions
        options={options}
        questionNumber={questionNumber}
        saveResponse={saveResponse}
      />
    </rb.Grid>
  );
};

export const Two = ({ saveResponse }) => {

  let questionNumber = 2;

  let question = "Which photo do you prefer?";

  let images = [
    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=500" alt="option"/>
  ];

  let captions = [
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


export const Three = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 3;

  let images = [
    <img src="https://images.unsplash.com/photo-1515384106131-1b6982e72013?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1516920846492-81bc6da9fc38?w=500" alt="option"/>
  ];

  let captions = [
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
  const question = "Which photo do you prefer?";

  let questionNumber = 4;

  let images = [
    <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1522573089570-b0a8e61bdfe5?w=500" alt="option"/>
  ];

  let captions = [
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
  const question = "Which photo do you prefer?";

  let questionNumber = 5;

  let images = [
    <img src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1518139289178-b9b7d8b0cab9?w=500" alt="option"/>
  ];

  let captions = [
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
  const question = "Which photo do you prefer?";

  let questionNumber = 6;

  let images = [
    <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500" alt="option"/>
  ];

  let captions = [
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

export const Seven = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 7;

  let images = [
    <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500" alt="option"/>
  ];

  let captions = [
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

export const Eight = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 8;

  let images = [
    <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500" alt="option"/>
  ];

  let captions = [
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

export const Nine = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 9;

  let images = [
    <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500" alt="option"/>
  ];

  let captions = [
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

export const Ten = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 10;

  let images = [
    <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500" alt="option"/>
  ];

  let captions = [
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
