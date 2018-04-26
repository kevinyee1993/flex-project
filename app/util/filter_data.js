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
module.exports  = function filterData(query) {
  var MongoClient = require('mongodb').MongoClient;
  // var url = "mongodb://localhost:27017/";
  let url = 'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject';

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    // var dbo = db.db("mydb");
    //change this query to whatever is passed in
    // var query = { price: 1 };
    db.collection("Activities").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}
