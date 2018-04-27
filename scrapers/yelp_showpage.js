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


//export this after!!!

//need to change this url to get different show pages
//url can come from the yelp_restaurants scraper
//also need to take in url as param and then pass that into url
function showScrape() {
  let url = `https://www.yelp.com/biz/papaito-rotisserie-hayward?osq=Restaurants`;
  return fetch(`${url}`)
  .then(response => response.text());
}

function showScrapeImages() {
  let url = `https://www.yelp.com/biz_photos/papaito-rotisserie-hayward`;
  return fetch(`${url}`)
  .then(response => response.text());
}



    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
//   showScrape()
//     .then(body => {
//       const $ = cheerio.load(body);
//
//       $('#yelp_main_body').each((i, element) => {
//
//         const $element = $(element);
//         const $review = $element.find(".js-from-biz-owner p");
//
//         const restaurant = {
//           // name: $name.text(),
//           review: $review.text(),
//         };
//
//         Object.keys(restaurant).forEach(key => {
//           let value = restaurant[key].replace(/(?:\r\n|\r|\n)/g, ' ');
//           value = value.replace(/ +(?= )/g,'');
//           value = value.trim();
//           restaurant[key] = value;
//         });
//
//         console.log(restaurant);
//     });
// });

showScrapeImages()
  .then(body => {
    const $ = cheerio.load(body);

    let images = [];
    $('.photo-box').each((i, element) => {

      const $element = $(element);
      // const $review = $element.find(".js-from-biz-owner p");
      const $image = $element.find("img");
// butt = str.match(/bphoto\/(.*)\//)
// console.log($image.attr("src").match(/bphoto\/(.*)\//));
      if($image.attr("src")) {
        // images.push($image.attr("src").match(/bphoto\/(.*)\//)[1]);
        let imgCode = $image.attr("src").match(/bphoto\/(.*)\//)[1];
        images.push(`https://s3-media4.fl.yelpcdn.com/bphoto/${ imgCode }/o.jpg`);
      }
    });

  const restaurant = {
    // name: $name.text(),
    images: images,
  };

  console.log(restaurant);
});


//https://s3-media4.fl.yelpcdn.com/bphoto/  ZYjFqvRORpscudIdYBxTmw  /o.jpg
//the stuff surrounded by spaces need to be interpolated to new image
//image url from yelp looks like this
//https://www.yelp.com/biz_photos/papaito-rotisserie-hayward?select=J7MHArydoafasYy-st1oQA

//where the stuff after select= is what you interpolate into that first link
//also need to change the name of the



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
