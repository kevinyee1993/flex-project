//SCRAPER FOR YELP, all activities
//yelp scraper is dedicated to different activities, save these all under
//an activities collection in db

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
const LANDMARKS = "landmarks";
const NIGHTLIFE = "nightlife";
const SHOPPING = "Shopping+Centers";

//outdoors can be a lot of things, need to split into different subcategories
const SPAS = "spas";
const MUSEUMS = "museums";
const PARKS = "parks";
const TOURS = "tours";

const CULTURE_CAT = [ MUSEUMS, LANDMARKS ];
const LEISURE_CAT = [ SHOPPING, SPAS ];
const OUTDOOR_CAT = [ PARKS, TOURS ];
const NIGHTLIFE_CAT = [ NIGHTLIFE ];



const async = require('asyncawait/async');

function scrape(resultNum, category) {
  let url;
  if(category === NIGHTLIFE){
    url = 'https://www.yelp.com/search?find_desc=nightlife&find_loc=San+Francisco,+CA&sortby=review_count&start=';
  } else {
    url = `https://www.yelp.com/search?find_desc=${ category }&sortby=rating&find_loc=San+Francisco,+CA&start=`;
  }
  return fetch(`${url}${resultNum}`)
  .then(response => response.text());
}


//ignore linter here
// module.exports =

//ignore linter here
// module.exports =
async function megaScrape(category) {
  let allActivities = [];

  //0 is 10 results 0-10
  for(let page = 0; page < NUM_PAGES; page++) {

    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
    await scrape(page * 10, category)
    .then(body => {
      const activities = [];
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


        //set this up to switch the main categories depending on what you searched for
        let mainCategory = checkMainCategory(category);

        //converts all $ prices to numbers so that it's easier to query
        let priceToNum = $price.text().length;
        let numberPattern = /\d+/g;
        let bigPic = $image.attr("src").replace(/90s/, '1000s');

        const activity = {
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
          category: mainCategory,
        };

        activities.push(activity);
      });


    allActivities = allActivities.concat(activities);

    });

  }

  //gets rid of all line breaks and extra spaces
  for(let i = 0; i < allActivities.length; i++) {
    Object.keys(allActivities[i]).forEach( (key) => {

      if(key === "price" || key === "numReviews") {
        //do not clean up the data if we're looking at price
      } else {
        let value = allActivities[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
        value = value.replace(/ +(?= )/g,'');
        value = value.trim();
        allActivities[i][key] = value;
      }
    });
  }

  // console.log(allActivities);
  for(let i = 0; i < allActivities.length; i++) {
    await PostToDatabase('activities', allActivities[i]);
  }


}

//categorizes all the subactivities into 1 of 4 main affinity categories
//helps to organize db
function checkMainCategory(category) {
  if(CULTURE_CAT.includes(category)) {
    return "culture";
  } else if (LEISURE_CAT.includes(category)) {
    return "leisure";
  } else if (OUTDOOR_CAT.includes(category)) {
    return "outdoor";
  } else if (NIGHTLIFE_CAT.includes(category)) {
    return "nightlife";
  }
}

//change this to get different categories
//going to have a whole bunch of activities of diff categories
// megaScrape(LANDMARKS);
// megaScrape(NIGHTLIFE);
// megaScrape(SHOPPING);
// megaScrape(SPAS);
// megaScrape(MUSEUMS);
// megaScrape(PARKS);
// megaScrape(TOURS);
