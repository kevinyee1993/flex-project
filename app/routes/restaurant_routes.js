var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

//get route for restaurants
  app.get('/restaurants/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('Restaurants').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  //post route for restaurants
  app.post('/restaurants', (req, res) => {

      //delete the check here too
      db.collection('Restaurants').insert(req.body, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

};
