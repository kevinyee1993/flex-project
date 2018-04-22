//SCRAPER FOR OPENTABLE, SF RESTAURANTS, ALL CUISINE

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const SF_ID = 4;

//NOTE: if you wanna change which city you want to look at, change the metroId of the URL
//metroId of 4 is SF/bay area
//Can create hash map of city with metroId and can customize which city we wanna look up by replacing that metroId
// const url = "https://www.opentable.com/s/?cuisineids%5B%5D=8afc7adc-de3b-439d-91f2-ce568c1a653b&cuisineids%5B%5D=48e9d049-40cf-4cb9-98d9-8c47d0d58986&cuisineids%5B%5D=029cd931-4a83-4572-b87a-2b0ce7abcb1e&cuisineids%5B%5D=0735c10c-6ab6-46f6-87aa-8fe54397744d&cuisineids%5B%5D=39c85294-d536-48d4-93ce-675a2db3a064&cuisineids%5B%5D=54aad245-1061-478d-9d4c-1c3b3560e8f6&currentview=list&metroid=4&size=100&sort=Popularity";
const url = "https://www.opentable.com/s/?cuisineids%5B%5D=8afc7adc-de3b-439d-91f2-ce568c1a653b&cuisineids%5B%5D=48e9d049-40cf-4cb9-98d9-8c47d0d58986&cuisineids%5B%5D=029cd931-4a83-4572-b87a-2b0ce7abcb1e&cuisineids%5B%5D=0735c10c-6ab6-46f6-87aa-8fe54397744d&cuisineids%5B%5D=39c85294-d536-48d4-93ce-675a2db3a064&cuisineids%5B%5D=54aad245-1061-478d-9d4c-1c3b3560e8f6&currentview=list&size=100&sort=Popularity&metroid=";

function scrape(metroId) {
  // return fetch(`${url}`)
  return fetch(`${url}${metroId}`)
  .then(response => response.text());
}


//image returning url but all looks like this:
//image: '//media.otstatic.com/search-result-node/images/no-image.png'
//try to figure this out later

//param that is put into scrape is the metroId, 4 is SF, change it for different cities

scrape(SF_ID)
.then(body => {
  const restaurants = [];
  const $ = cheerio.load(body);
  $('.result').each((i, element) => {
    const $element = $(element);
    const $name = $element.find(".rest-row-name-text");
    const $category = $element.find(".rest-row-meta--cuisine");
    const $location = $element.find(".rest-row-meta--location");
    const $numReviews = $element.find(".star-rating-text");
    const $recommendation = $element.find(".recommended-text");
    const $price = $element.find(".rest-row-pricing i");
    // const $image = $element.find("img");
    // console.log($element.text());

    const restaurant = {
      name: $name.text(),
      category: $category.text(),
      location: $location.text(),
      numReviews: $numReviews.text(),
      recommendations: $recommendation.text(),
      price: $price.text(),
      // image: $image.attr('src'),
    };

    restaurants.push(restaurant);
  });


  console.log(restaurants);
});



// const rp = require('request-promise');
// const cheerio = require('cheerio');
// const options = {
//   uri: `https://convogenius.herokuapp.com/#/`,
//   transform: function (body) {
//     // return ($('.main-header').text());
//     return cheerio.load(body);
//   },
// };
//
// rp(options)
//   .then(($) => {
//     // console.log($('.main-header').text());
//     console.log($);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//
//   //track-title
