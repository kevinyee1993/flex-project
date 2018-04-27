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


//need to change this url to get different show pages
function scrape() {
  let url = `https://www.yelp.com/biz/papaito-rotisserie-hayward?osq=Restaurants`;
  return fetch(`${url}`)
  .then(response => response.text());
}



    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
  scrape()
    .then(body => {
      const $ = cheerio.load(body);

      $('#yelp_main_body').each((i, element) => {

        const $element = $(element);
        const $review = $element.find(".js-from-biz-owner p");

        const restaurant = {
          // name: $name.text(),
          review: $review.text(),
        };

        Object.keys(restaurant).forEach(key => {
          let value = restaurant[key].replace(/(?:\r\n|\r|\n)/g, ' ');
          value = value.replace(/ +(?= )/g,'');
          value = value.trim();
          restaurant[key] = value;
        });

        console.log(restaurant);
    });
});

  //gets rid of all line breaks and extra spaces
  // for(let i = 0; i < allRestaurants.length; i++) {
  //   Object.keys(allRestaurants[i]).forEach( (key) => {
  //
  //     if(key === "price" || key === "numReviews") {
  //       //do not clean up the data if we're looking at price
  //     } else {
  //       let value = allRestaurants[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
  //       value = value.replace(/ +(?= )/g,'');
  //       value = value.trim();
  //       allRestaurants[i][key] = value;
  //     }
  //   });
  // }

  //this is just to test what we're getting back


  //uncomment all the stuff below to add to database
  // for(let i = 0; i < allRestaurants.length; i++) {
  //   await PostToDatabase('restaurants', allRestaurants[i]);
  // }
