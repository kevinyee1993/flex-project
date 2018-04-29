//SCRAPER FOR YELP, all lodgings
//yelp scraper is dedicated to different lodgings, save these all under
//an lodgings collection in db

//can call the megafetch multiple times using a different param for each
//and then store those
const PostToDatabase = require('../app/util/post_request');


const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 1;

//add new category in json returned and use these as categories
//landmarks, nightlife, and shopping are all pretty straightforward
const HOTELS = "hotels";
const HOSTELS = "hostels";

const async = require('asyncawait/async');

function scrape(resultNum, category) {
  let url = `https://www.yelp.com/search?find_desc=${ category }&sortby=rating&find_loc=San+Francisco,+CA&start=`;

  return fetch(`${url}${resultNum}`)
  .then(response => response.text());
}

let allLodging = [];

//ignore linter here
async function megaScrape(category) {

  //0 is 10 results 0-10
  for(let page = 0; page < NUM_PAGES; page++) {

    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
    await scrape(page * 10, category)
    .then(body => {
      const lodgings = [];
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

        let priceToNum = $price.text().length;

        let numberPattern = /\d+/g;

// console.log(parseInt($numReviews.text().match( numberPattern )[0]));

        const lodging = {
          name: $name.text(),
          numReviews: parseInt($numReviews.text().match( numberPattern )[0]),
          // numReviews: $numReviews.text(),
          address: $address.text().replace(/([a-z])([A-Z])/g, '$1 $2'),
          phone: $phone.text(),
          tags: $category.text(),

          //gets rid of the "rating" text
          rating: $rating.attr('title').substring(0,3),
          price: priceToNum,
          image: $image.attr('src'),
          link: "https://www.yelp.com/" + $link.attr('href'),
        };

        lodgings.push(lodging);
      });


    allLodging = allLodging.concat(lodgings);

    });

  }

  //gets rid of all line breaks and extra spaces
  for(let i = 0; i < allLodging.length; i++) {
    Object.keys(allLodging[i]).forEach( (key) => {

      if(key === "price" || key === "numReviews") {
        //do not clean up the data if we're looking at price
      } else {
        let value = allLodging[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
        value = value.replace(/ +(?= )/g,'');
        value = value.trim();
        allLodging[i][key] = value;
      }
    });
  }

  // console.log(allLodging);
  for(let i = 0; i < allLodging.length; i++) {
    await PostToDatabase('lodging', allLodging[i]);
  }
}


//change this to get different categories
megaScrape(HOTELS);
// megaScrape(HOSTELS);

//NOTE, NEED TO CHECK THE TAGS, SOME OF THE HOSTELS RETURNED ARE HOTELS
