//SCRAPER FOR YELP, all restaurants
const PostToDatabase = require('../app/util/post_request');


const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 1;

const async = require('asyncawait/async');

function scrape(resultNum) {
  let url = `https://www.yelp.com/search?find_desc=restaurants&find_loc=San+Francisco,+CA&sortby=rating&start=`;
  return fetch(`${url}${resultNum}`)
  .then(response => response.text());
}

let allRestaurants = [];

//ignore linter here
async function megaScrape() {

  //0 is 10 results 0-10
  for(let page = 0; page < NUM_PAGES; page++) {

    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
    await scrape(page * 10)
    .then(body => {
      const restaurants = [];
      const $ = cheerio.load(body);

      $('.regular-search-result').each((i, element) => {

        const $element = $(element);
        // const $name = $element.find(".rest-row-name-text");
        const $name = $element.find(".biz-name");
        const $numReviews = $element.find(".review-count");
        const $address = $element.find("address");
        const $category = $element.find(".category-str-list");
        const $rating = $element.find(".i-stars");
        const $price = $element.find(".business-attribute ,price-range");
        const $image = $element.find(".photo-box-img");
        // console.log($rating.text());

        //converts all $ prices to numbers so that it's easier to query
        let priceToNum = $price.text().length;

        //used to just get the numbers from reviews and ratings
        let numberPattern = /\d+/g;


        const restaurant = {
          name: $name.text(),
          numReviews: $numReviews.text(),
          address: $address.text(),
          tags: $category.text(),
          rating: $rating.attr('title'),
          // price: $price.text(),
          price: priceToNum,
          image: $image.attr('src'),
        };

        restaurants.push(restaurant);
      });


    allRestaurants = allRestaurants.concat(restaurants);

    });

  }

  //gets rid of all line breaks and extra spaces
  for(let i = 0; i < allRestaurants.length; i++) {
    Object.keys(allRestaurants[i]).forEach( (key) => {

      if(key === "price") {
        //do not clean up the data if we're looking at price
      } else {
        let value = allRestaurants[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
        value = value.replace(/ +(?= )/g,'');
        value = value.trim();
        allRestaurants[i][key] = value;
      }
    });
  }

  //this is just to test what we're getting back
  console.log(allRestaurants);

  //uncomment all the stuff below to add to database
  // for(let i = 0; i < allRestaurants.length; i++) {
  //   await PostToDatabase('restaurants', allRestaurants[i]);
  // }
}

megaScrape();
