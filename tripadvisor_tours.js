const fetch = require('node-fetch');
const cheerio = require('cheerio');

const async = require('asyncawait/async');
let bikesUrl = 'https://www.tripadvisor.com/Attraction_Products-g60713-zfc11911-zfg11876-San_Francisco_California.html';
const NUM_PAGES = {1: "", 2: "oa30-"};

function scrape(pageNumber, url) {
  return fetch(`https://www.tripadvisor.com/Attraction_Products-g60713-zfc11911-zfg11876-San_Francisco_California.html`)
    .then(response => response.text());
}

let allBikeTours = [];

async function megaScrape(category) {
  for (let page = 1; page <= 1; page++) {
    await scrape(NUM_PAGES[page])
      .then(body => {
        const tours = [];
        const $ = cheerio.load(body);
        $('.listing_details').each((i, element) => {
          const $element = $(element);
          const $name = $element.find(".listing_title");
          const listingArray = $element.text().split(" ");
          let descStart = $name.text().split(" ").length + 1;
          let descEnd = listingArray.indexOf('read') - 1;
          let descChopped = listingArray.slice(descStart).join(" ").split(".")[0] + ".";
          const $description = descChopped;
          let priceInd = listingArray.indexOf("Info") - 2;
          const $price = listingArray[priceInd];
          if (listingArray.includes("review") || listingArray.includes("reviews")) {
            const $activity = {
              name: $name.text(),
              price: $price,
              description: $description,
              category: category,
            };
            console.log($activity);
          }
        });

      });

  }
}

megaScrape("Tours");
