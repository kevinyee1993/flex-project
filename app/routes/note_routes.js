//THIS FILE ISN'T USED FOR ANYTHING
//JUST FOR PRACTICE SETTING UP BACKEND

//in express routes are wrapped in a function which takes
//express instance and a database as arguments
module.exports = function(app, db) {

  //setting up a create route after setting up the index and server
  //first param is the path name
  //when app gets a post request to notes path, it will take the req which
  //could be something like json and then create a response which replies
  //to the request
  app.post('/notes', (req, res) => {
  // You'll create your note here.
  console.log(req.body);
  res.send('Hello');
});

};
