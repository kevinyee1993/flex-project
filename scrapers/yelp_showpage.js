//SHOWPAGE FOR YELP RESTAURANTS
const PostToDatabase = require('../app/util/post_request');


const fetch = require('node-fetch');
const cheerio = require('cheerio');

//note, pages for yelp are shown as 0, 10, 20, etc.
//shows 10 results per page and the number above represents the first
//result you want to start with
//need to multiply NUM_PAGES by 10 or something
const NUM_PAGES = 1;

const async = require('asyncawait/async');


//connect to mongodb
var MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject';


//export this after!!!

//need to change this url to get different show pages
//url can come from the yelp_restaurants scraper
//also need to take in url as param and then pass that into url
function showScrapeText(data) {
  let url = `https://www.yelp.com/biz/${ data }`;
  return fetch(`${url}`)
  // return fetch(`https://www.yelp.com//biz/noriega-produce-san-francisco?osq=restaurants`)
  .then(response => response.text());
}

function showScrapeImages(data) {
  let url = `https://www.yelp.com/biz_photos/${ data }`;
  // let url = `https://www.yelp.com/biz_photos/tadu-ethiopian-kitchen-san-francisco-3`;
  return fetch(`${url}`)
  // return fetch(`https://www.yelp.com//biz/noriega-produce-san-francisco?osq=restaurants`)
  .then(response => response.text());
}


// module.exports = async function showPageInfo(data) {
  let megaObject = {};


async function megaScrape(data) {

  //gets all other data besides reviews
    await showScrapeText(data)
      .then(body => {
        const $ = cheerio.load(body);

        $('#yelp_main_body').each((i, element) => {

          const $element = $(element);
          const $ownerDesc = $element.find(".js-from-biz-owner p");
          const $neighborhood = $element.find(".neighborhood-str-list");
          // const $reviews = $element.find(".review-content p");

          const restaurant = {
            ownerDesc: $ownerDesc.text(),
            neighborhood: $neighborhood.text(),
            // reviews: $reviews.text(),
          };

          Object.keys(restaurant).forEach(key => {
            let value = restaurant[key].replace(/(?:\r\n|\r|\n)/g, ' ');
            value = value.replace(/ +(?= )/g,'');
            value = value.trim();
            restaurant[key] = value;
          });

          // console.log(restaurant);
          // return restaurant;
          Object.assign(megaObject, restaurant);
      });
  });

  //to get user reviews in an array
    await showScrapeText(data)
      .then(body => {
        const $ = cheerio.load(body);

        let allReviews = [];

        $('.review').each((i, element) => {

          const $element = $(element);
          const $username = $element.find(".user-name");
          const $review = $element.find(".review-content p");
          const $profilepic = $element.find("img");

          //gets the bigger version of profile picture
          let bigPic = $profilepic.attr("src").replace(/60s/, '300s');

          let reviewInfo = { username: $username.text(),
          review: $review.text(),
          profilepic: bigPic};

          Object.keys(reviewInfo).forEach(key => {
              let value = reviewInfo[key].replace(/(?:\r\n|\r|\n)/g, ' ');
              value = value.replace(/ +(?= )/g,'');
              value = value.trim();
              reviewInfo[key] = value;
          });

          allReviews.push(reviewInfo);


          // const restaurant = {
          //   reviews: $reviews.text(),
          // };
          //
          // Object.keys(restaurant).forEach(key => {
          //   let value = restaurant[key].replace(/(?:\r\n|\r|\n)/g, ' ');
          //   value = value.replace(/ +(?= )/g,'');
          //   value = value.trim();
          //   restaurant[key] = value;
          // });
          //
          // Object.assign(megaObject, restaurant);
      });

      Object.assign(megaObject, { reviews: allReviews });
  });


  await showScrapeImages(data)
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

      Object.assign(megaObject, restaurant);
      // console.log(restaurant);
      // return restaurant;
      // restaurants.push(restaurant)
    });

    // console.log(megaObject);
    return megaObject;
}

//change this to take in any of the whatever whatevers

MongoClient.connect(url, function(err, db) {

// loops through all restaurants in database

  //change this for lodging, restaurant, whatever
  // let collectionName = 'Restaurants';
  let collectionName = 'Activities';

  db.collection(collectionName, function(err, collection) {
        collection.find(function(err, cursor) {
            cursor.each(function(err, restaurant) {

                if(restaurant){

                  //should grab the correct restaurant then update it
                    megaScrape(restaurant.link.match(/biz\/(.*)\?/)[1])
                      .then(updateInfo => {
                        // let newValues = { $set: updateInfo };
                        // let query = { name: restaurant.name }

                        //think the problem is right here because we have all the info we need
                        db.collection(collectionName).updateOne({ name: restaurant.name }, { $set: updateInfo }, function(err, res) {
                          // console.log(updateInfo)
                          if (err) throw err;
                          // console.log("1 document updated");
                          // db.close();
                        });

                       })
                }
                else{
                    // db.close();
                }


            });
        });
    });


});


// megaScrape("noriega-produce-san-francisco")
//   .then(object => console.log(object));





  // return megaObject;







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
