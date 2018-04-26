//idea is to connect frontend responses to backend here
//answers get stored in db
//use that stored answer to create a query then we can use filter_data.js
//with that query to get back results

//could also think about just creating a query based off of the results on the
//front end without having to store anything in the backend

//e.g. from the frontend results, yihwan is able to create a list of what
//the user wants as an object like { price: 2, category: "culture" }
//just use that a query to filter_data
//actually... do I need to store that in backend first? not sure..
//say we get that data upon submit how the hell do we use it


var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

//get route for responses
  app.get('/responses/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('Responses').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  //post route for responses
  app.post('/responses', (req, res) => {

      //delete the check here too
      db.collection('Responses').insert(req.body, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

};
