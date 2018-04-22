//SCRAPER FOR EVENTBRITE, SF, FOOD

const fetch = require('node-fetch');
const cheerio = require('cheerio');


const url = "https://www.eventbrite.com/d/ca--san-francisco/food-and-drink--events/?crt=regular&sort=best&page=";

function scrape(pageNumber) {
  // return fetch(`${url}`)
  return fetch(`${url}${pageNumber}`)
  .then(response => response.text());
}


//hard coded 1 just to check for customized page number
//getting back names but with hella white space
scrape(1)
.then(body => {
  const activities = [];
  const $ = cheerio.load(body);

  // $('.list-card__body').each((i, element) => {
  $('.list-card-v2').each((i, element) => {

    const $element = $(element);
    // const $name = $element.find(".rest-row-name-text");
    const $name = $element.find(".list-card__title");
    const $date = $element.find(".list-card__date");
    const $priceRange = $element.find(".list-card__label");
    const $location = $element.find(".list-card__venue");


    const activity = {
      name: $name.text(),
      date: $date.text(),
      priceRange: $priceRange.text(),
      location: $location.text(),
    };

    activities.push(activity);
  });
  console.log(activities);
});
