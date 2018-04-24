//SCRAPER FOR YELP, specifically landmarks


const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 1;

//add new category in json returned and use these as categories
const LANDMARKS = "landmarks";
const NIGHTLIFE = "nightlife";

const async = require('asyncawait/async');

function scrape(resultNum, category) {
  let url = `https://www.yelp.com/search?find_desc=${ category }&find_loc=San+Francisco+Bay+Area,+CA&start=`;
  return fetch(`${url}${resultNum}`)
  .then(response => response.text());
}

let allLandmarks = [];

//ignore linter here
async function megaScrape(category) {

  //0 is 10 results 0-10
  for(let page = 0; page < NUM_PAGES; page++) {

    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
    await scrape(page * 10, category)
    .then(body => {
      const landmarks = [];
      const $ = cheerio.load(body);

      $('.regular-search-result').each((i, element) => {

        const $element = $(element);
        // const $name = $element.find(".rest-row-name-text");
        const $name = $element.find(".biz-name");
        const $numReviews = $element.find(".review-count");
        const $address = $element.find("address");
        const $category = $element.find(".category-str-list a");
        const $rating = $element.find(".i-stars");
        const $price = $element.find(".business-attribute ,price-range");
        const $image = $element.find(".photo-box-img");
        // console.log($rating.text());

        
        const landmark = {
          name: $name.text(),
          numReviews: $numReviews.text(),
          address: $address.text(),
          tags: $category.text(),
          rating: $rating.attr('title'),
          price: $price.text(),
          image: $image.attr('src'),
          category: category,
        };

        landmarks.push(landmark);
      });


    allLandmarks = allLandmarks.concat(landmarks);

    });

  }

  //gets rid of all line breaks and extra spaces
  for(let i = 0; i < allLandmarks.length; i++) {
    Object.keys(allLandmarks[i]).forEach( (key) => {
      let value = allLandmarks[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
      value = value.replace(/ +(?= )/g,'');
      value = value.trim();
      allLandmarks[i][key] = value;
    });
  }

  console.log(allLandmarks);
}

//change this to get different categories
megaScrape(NIGHTLIFE);
