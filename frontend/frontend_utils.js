export const tagParser = (rawTags) => {
  let prettyTags = "";

  for (let i = 0; i < rawTags.length; i++) {
    prettyTags += rawTags[i];

    if (i !== rawTags.length - 1) {
      prettyTags += " ● ";
    }
  }

  return prettyTags;
};

// from https://codereview.stackexchange.com/questions/177945/convert-rating-value-to-visible-stars-using-fontawesome-icons
export const starGenerator = (numStars) => {
  // Round to nearest half
  numStars = Math.round(numStars * 2) / 2;
  let output = ['<i class="fa fa-star" aria-hidden="true"></i>'];

  // Append all the filled whole stars
  for (var i = numStars; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true"></i>');

  // If there is a half a star, append it
  if (i === .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" ></i>');

  return output.join('');
};

// from Elias Zamaris on stackoverflow.com
export const addCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// from https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
export const currencyRound = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});
