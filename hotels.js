//SCRAPER FOR hotels.com, SF

const fetch = require('node-fetch');
const cheerio = require('cheerio');

// let url = "https://www.hotels.com/search.do?resolved-location=CITY%3A1493604%3AUNKNOWN%3AUNKNOWN&destination-id=1493604&q-destination=San%20Francisco,%20California,%20United%20States%20of%20America&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=DISTANCE_FROM_LANDMARK";
let url = "https://www.hotels.com/search.do?resolved-location=CITY%3A1493604%3AUNKNOWN%3AUNKNOWN&destination-id=1493604&q-destination=San%20Francisco,%20California,%20United%20States%20of%20America&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=DISTANCE_FROM_LANDMARK&pn=";
const numPages = 5;


function scrape(pageNumber) {
  // return fetch(`${url}`)
  // return fetch(`${url}`)
  // .then(response => response.text());

  // for(let i = 1; i < numPages; i++) {
  // let pn = 1;
    return fetch(`${url}${pageNumber}`)
      .then(response => response.text());
  // }

}


//image returning url but all looks like this:
//image: '//media.otstatic.com/search-result-node/images/no-image.png'
//try to figure this out later

//param that is put into scrape is the metroId, 4 is SF, change it for different cities
let allHotels = [];


for(let page = 1; page <= numPages; page++) {
  scrape(page)
  .then(body => {
    const hotels = [];
    const $ = cheerio.load(body);
    $('.description').each((i, element) => {
      const $element = $(element);
      // const $name = $element.find(".rest-row-name-text");
      const $name = $element.find(".p-name");

      const hotel = {
        // name: $name.text(),
        name: $name.text(),

      };

      hotels.push(hotel);
    });

    allHotels = allHotels.concat(hotels);
    console.log(allHotels);
  });
}





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
