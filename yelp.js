//SCRAPER FOR YELP, specifically landmarks


const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 1;

const async = require('asyncawait/async');

function scrape(resultNum) {
  let url = `https://www.yelp.com/search?find_desc=landmarks&find_loc=San+Francisco+Bay+Area,+CA&start=`;
  return fetch(`${url}${resultNum}`)
  .then(response => response.text());
}

let allLandmarks = [];

//ignore linter here
async function megaScrape() {

  //0 is 10 results 0-10
  for(let page = 0; page < NUM_PAGES; page++) {

    //0 gives 0 which gives first 10 results, 1 gives 10, 2 gives 20, etc.
    await scrape(page * 10)
    .then(body => {
      const landmarks = [];
      const $ = cheerio.load(body);

      $('.regular-search-result').each((i, element) => {

        const $element = $(element);
        // const $name = $element.find(".rest-row-name-text");
        const $name = $element.find(".biz-name");

        const landmark = {
          name: $name.text(),
        };

        landmarks.push(landmark);
      });

      //str = str.replace(/(?:\r\n|\r|\n)/g, ' ');
      //this is to replace all the new lines with spaces
    //then deletes all the extra spaces including the leading and trailing
    //white space.  Cleans up the JSON nicely

    allLandmarks = allLandmarks.concat(landmarks);

    });

  }

  // for(let i = 0; i < allActivities.length; i++) {
  //   Object.keys(allActivities[i]).forEach( (key) => {
  //     let value = allActivities[i][key].replace(/(?:\r\n|\r|\n)/g, ' ');
  //     value = value.replace(/ +(?= )/g,'');
  //     value = value.trim();
  //     allActivities[i][key] = value;
  //   });
  // }


  console.log(allLandmarks);
}

//just add the category here
megaScrape();
