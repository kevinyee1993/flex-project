var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {


  //don't think we'll be needing to find lodging by id anytime soon
  //but uncomment this out if we do

  // app.get('/lodging/:id', (req, res) => {
  //   const id = req.params.id;
  //   const details = { '_id': new ObjectID(id) };
  //
  //   db.collection('Lodging').findOne(details, (err, item) => {
  //     if (err) {
  //       res.send({'error':'An error has occurred'});
  //     } else {
  //       res.send(item);
  //     }
  //   });
  //
  // });

  app.post('/lodging', (req, res) => {

      db.collection('Lodging').insert(req.body, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

    app.get('/lodging', (req, res) => {
      db.collection("Lodging").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
    });

    app.get('/lodging/:name', (req, res) => {
      // const name = req.params.name;
      // const details = { 'name': new ObjectID(name) };
      console.log(req.params.name);

      db.collection("Lodging").find({"name": req.params.name}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
    });

};
