//SCRAPER FOR EVENTBRITE, SF, FOOD

//instead of making multiple files, there is a way to manipulate the url to enter different
//categories and get it back as well as the pages, just need to split the url into different
//sections

//e.g:
//food url: https://www.eventbrite.com/d/ca--san-francisco/food-and-drink--events/?crt=regular&page=1&sort=best
//music url: https://www.eventbrite.com/d/ca--san-francisco/music--events/?crt=regular&page=1&sort=best
//arts url: https://www.eventbrite.com/d/ca--san-francisco/arts--events/?crt=regular&page=1&sort=best
//already moved the page to the end so that's taken care of
//the only difference between the urls are food-and-drink, music, and arts
//just replace those with an interpolation to get different data


const fetch = require('node-fetch');
const cheerio = require('cheerio');

const FOOD_AND_DRINK = 'food-and-drink';
const MUSIC = 'music';
const ARTS = 'arts';

// const url = "https://www.eventbrite.com/d/ca--san-francisco/food-and-drink--events/?crt=regular&sort=best&page=";

function scrape(event, pageNumber) {
  let url = `https://www.eventbrite.com/d/ca--san-francisco/${ event }--events/?crt=regular&sort=best&page=`;
  return fetch(`${url}${pageNumber}`)
  .then(response => response.text());
}


//hard coded 1 just to check for customized page number
//hard coded category too but ideally want to pass that in as arg
//getting back names but with hella white space

//for white spaces and new lines, strategy:
//turn all new lines into spaces
//regex to find any spaces that come in groups of 2 or more
//if find those, replace them with nothing
scrape(FOOD_AND_DRINK, 1)
.then(body => {
  const activities = [];
  const $ = cheerio.load(body);

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

  //str = str.replace(/(?:\r\n|\r|\n)/g, ' ');
  //this is to replace all the new lines with spaces
//then deletes all the extra spaces including the leading and trailing
//white space.  Cleans up the JSON nicely
  for(let i = 0; i < activities.length; i++) {
    Object.keys(activities[i]).forEach( (key) => {
      let value = activities[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
      value = value.replace(/ +(?= )/g,'');
      value = value.trim();
      activities[i][key] = value;
    });
  }


  console.log(activities);
});
