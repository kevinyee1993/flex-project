//This file used to filter db results based on what the user enters
//for their survey

//need to define the params that we should take or whatever feel me
//actually for activities, just need to take a name param that will
//be determined by the AI
//check if it's going to be an array of activities that are going to be
//passed and if you need to grab all of them

//might need to create another filter data for restaurants/lodging
//or update this one to account for those as well

//after user completes survey, need that data
//then need to send all of this data back to the user
//figure out how to do this


//put the query in the params rather than creating it yourself in line 29
module.exports  = function filterData(collection, query) {
  var MongoClient = require('mongodb').MongoClient;
  let url = 'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject';
  // var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    // var dbo = db.db("mydb");
    //change this query to whatever is passed in
    // var query = { price: 1 };
    db.collection(collection).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}








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

var MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject';



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
