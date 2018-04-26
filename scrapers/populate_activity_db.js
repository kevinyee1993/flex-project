const megaScrape = require('./yelp_activities');

const LANDMARKS = "landmarks";
const NIGHTLIFE = "nightlife";
const SHOPPING = "Shopping+Centers";
const SPAS = "spas";
const MUSEUMS = "museums";
const PARKS = "parks";
const TOURS = "tours";

let allCategories = [ LANDMARKS,
  NIGHTLIFE,
  SHOPPING,
  SPAS,
  MUSEUMS,
  PARKS,
  TOURS ];


// for(let i = 0; i < allCategories.length; i++) {
//   megaScrape(allCategories[i]);
// }

megaScrape(LANDMARKS);
megaScrape(NIGHTLIFE);
megaScrape(SHOPPING);
megaScrape(SPAS);
megaScrape(MUSEUMS);
megaScrape(PARKS);
megaScrape(TOURS);
