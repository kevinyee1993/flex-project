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
