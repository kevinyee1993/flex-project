//change this route just checking what's the way to reach this without
//a lot of ..'s'
const filterData = require('../../../app/util/filter_data');


//ok this would work to get the data back, just need to get the query result
//here and then pass it into params and modify filter_data.js

//depends on where the data from the survey is being returned

//if send user survey data to backend, need to get it back but not sure
//if we have to persist that user survey data bc no point in keeping it around anymore
//if keeping around all the user survey data, need to also get that specific
//info

//rn first param = collection you want to filter from
//2nd param = query filter

filterData("Activities", { rating: "5.0 star rating" });
