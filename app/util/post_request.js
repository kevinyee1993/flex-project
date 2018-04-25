//takes in route name and object, then makes a request to post
//to the database

//axios is a way to make ajax requests without having to import
//the entire jquery library
const axios = require('axios');

module.exports = function(routeName, object) {

//TODO: change this URL when in production
  axios.post(`http://localhost:8000/${ routeName }`, object)
    .then(function (response) {
      // console.log(response);
      // console.log("posted to database");
    })
    .catch(function (error) {
      console.log(error);
    });
};
