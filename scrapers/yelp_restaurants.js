//SCRAPER FOR YELP, all restaurants
const PostToDatabase = require('../app/util/post_request');
// const showPageInfo = require('./yelp_showpage');
// const showImageInfo = require('./yelp_showpage');

const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 2;

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
        const $phone = $element.find(".biz-phone");
        const $category = $element.find(".category-str-list");
        const $rating = $element.find(".i-stars");
        const $price = $element.find(".business-attribute ,price-range");
        const $image = $element.find(".photo-box-img");
        const $link = $element.find(".indexed-biz-name a")
        // console.log($rating.text());

        //converts all $ prices to numbers so that it's easier to query
        let priceToNum = $price.text().length;

        let bigPic = $image.attr("src").replace(/90s/, '1000s');

        //used to just get the numbers from reviews and ratings
        let numberPattern = /\d+/g;
        // let noChars = /^[ a-zA-z]/

        // console.log($rating.attr('title').match(noChars));


        const restaurant = {
          name: $name.text(),
          numReviews: parseInt($numReviews.text().match( numberPattern )[0]),
          address: $address.text().replace(/([a-z])([A-Z])/g, '$1 $2'),
          phone: $phone.text(),
          tags: $category.text(),

          //gets rid of the "rating" text
          rating: $rating.attr('title').substring(0,3),
          price: priceToNum,
          image: bigPic,
          link: "https://www.yelp.com/" + $link.attr('href'),
        };

        // console.log(restaurant.link.match(/biz\/(.*)\?/)[1]);

        // Object.assign( restaurant, showPageInfo(restaurant.link.match(/biz\/(.*)\?/)[1]) );

        // restaurants.push( showPageInfo(restaurant.link.match(/biz\/(.*)\?/)[1]) );

        // console.log( showPageInfo(restaurant.link.match(/biz\/(.*)\?/)[1]) );






        // //SHIT IM WORKING ON RN
        // just need to figure out a way to await this then it'll work
        // showPageInfo(restaurant.link.match(/biz\/(.*)\?/)[1])
        //   // .then (data => { restaurants.push(data) });
        //   .then (data => { Object.assign(restaurant, data);
        //     restaurants.push(restaurant);
        //     // allRestaurants = allRestaurants.concat(restaurants);
        //     console.log(restaurants);
        //     // allRestaurants = allRestaurants.concat(restaurants);
        //     // console.log(allRestaurants);
        //     // console.log("hello this is show page info");
        //   });




          // .then (data => { console.log(data) });
        // console.log(restaurant.link);
        restaurants.push(restaurant);
        // console.log(restaurants);
      });


    allRestaurants = allRestaurants.concat(restaurants);
    // console.log(allRestaurants);
    });

  }

  //gets rid of all line breaks and extra spaces
  for(let i = 0; i < allRestaurants.length; i++) {
    Object.keys(allRestaurants[i]).forEach( (key) => {

      if(key === "price" || key === "numReviews") {
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
  // showPageInfo();

  // console.log(allRestaurants);

  //uncomment all the stuff below to add to database
  for(let i = 0; i < allRestaurants.length; i++) {
    await PostToDatabase('restaurants', allRestaurants[i]);
  }
}

megaScrape();
