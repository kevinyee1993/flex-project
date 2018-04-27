import React from 'react';
import * as rb from 'react-bootstrap';
import LargeImageOptions from './options/large_image';
import SmallImageOptions from './options/small_image';
import TextOptions from './options/text';
import Question from './question';

export const Zero = ({ saveResponse }) => {
  const question = "What's your budget for this trip?";

  let questionNumber = 0;

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

// [3, 4] - Nightlife vs. Culture
export const One = ({ saveResponse }) => {

    let questionNumber = 1;

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

export const Two = ({ saveResponse }) => {

  let questionNumber = 2;

  let question = "Choose an emoji:";

  let images = [
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/dog-face_1f436.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/performing-arts_1f3ad.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/books_1f4da.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/trophy_1f3c6.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/man-mage_1f9d9-200d-2642-fe0f.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/rocket_1f680.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/pot-of-food_1f372.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/man-in-business-suit-levitating_1f574.png" alt="option"/>,

  ];

  let captions = [
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

// [2, 3] - Spa/Shopping vs. Nightlife
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

// [2, 4] - Spa/Shopping vs. Culture
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
  const question = "Choose one:";

  let questionNumber = 5;

  let images = [
    <img src="https://images.unsplash.com/photo-1508869386031-88681cf0778a?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1504298032419-2e78164cf76e?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1418848151843-870d376037e5?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1443372335631-991ab3f8c1df?w=500" alt="option"/>
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

// [1, 3] - Outdoors/Nature vs. Nightlife
export const Six = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 6;

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

export const Seven = ({ saveResponse }) => {
  const question = "Choose a social network:";

  let questionNumber = 7;

  let images = [
    <img src="https://image.flaticon.com/icons/svg/174/174870.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174881.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174863.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174875.svg" alt="option"/>,
    <img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="option"/>,

  ];

  let captions = [
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

// [1, 2] - Outdoors/Nature vs. Spa/Shopping (might want to change 2nd)
export const Eight = ({ saveResponse }) => {
  const question = "Which photo do you prefer?";

  let questionNumber = 8;

  let images = [
    <img src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=500" alt="option"/>,
    <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500" alt="option"/>
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
  const question = "Choose a drink.";

  let questionNumber = 9;

  let images = [
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/potable-water-symbol_1f6b0.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/hot-beverage_2615.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/wine-glass_1f377.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/cocktail-glass_1f378.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/beer-mug_1f37a.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/tumbler-glass_1f943.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/cup-with-straw_1f964.png" alt="option"/>,
    <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/tropical-drink_1f379.png" alt="option"/>,

  ];

  let captions = [
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

// [1, 4] - Outdoors/Nature vs. Culture
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
