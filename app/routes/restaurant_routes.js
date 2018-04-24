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
      // const note = { text: req.body.body, title: req.body.title };
      // const restaurant = { name: req.body.name,
      //   category: req.body.category,
      //   location: req.body.location,
      //   numReviews: req.body.numReviews,
      //   recommendations: req.body.recommendations };
      // console.log('test');
      // console.log(req.body);
      //delete this after

      const test = {body: "hello"};
      console.log(req.body);

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

//ajax request would use these routes
//figure out how to add scraped json into db
//inefficient way = loop through all json in the array
//for each key value pair, loop through that and construct it that way
//actually don't have to loop
//when making post request, would need to also add data field
//that data field could be json data and that should update the db
