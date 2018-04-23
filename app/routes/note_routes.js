//THIS FILE ISN'T USED FOR ANYTHING
//JUST FOR PRACTICE SETTING UP BACKEND

//gets ids of the routes you're looking for and turns it into an object
//so mongodb can use it
var ObjectID = require('mongodb').ObjectID;

//in express routes are wrapped in a function which takes
//express instance and a database as arguments
module.exports = function(app, db) {

//get route for notes
  app.get('/notes/:id', (req, res) => {
    //uses ObjectID that was defined above
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    //looks like findOne is a built in method
    //findOne checks that database for in this case a specific id, and
    //once it finds it, it returns that item
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  //setting up a create route after setting up the index and server
  //first param is the path name
  //when app gets a post request to notes path, it will take the req which
  //could be something like json and then create a response which replies
  //to the request
  app.post('/notes', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('notes').insert(note, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

};
