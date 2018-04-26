var ObjectID = require('mongodb').ObjectID;

// want to append the survey answers to the end of the url
module.exports = function(app, db) {
//
//   app.get('/activities/:data/:name', (req, res) => {
//     const id = req.params.id;
//     const details = { '_id': new ObjectID(id) };
//
//     db.collection('Activities').findOne(details, (err, item) => {
//       if (err) {
//         res.send({'error':'An error has occurred'});
//       } else {
//         res.send(item);
//       }
//     });
//
//   });


  // //test this out later by searching it
  // app.get('/activities/:name', (req, res) => {
  //   const id = req.params.id;
  //   // const details = { '_id': new ObjectID(id) };
  //
  //   //how to get the url param into here?
  //   db.collection('Activities').find(name, (err, item) => {
  //     if (err) {
  //       res.send({'error':'An error has occurred'});
  //     } else {
  //       res.send(item);
  //     }
  //   });
  //
  // });


  app.get('activities/test', (req, res) => {
    // const id = req.params.id;
    // const details = { '_id': new ObjectID(id) };

    //how to get the url param into here?
    db.collection('Activities').find({"name": 'San Francisco Architecture Walking Tour'}, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  //find activity by id
  app.get('/activities/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('Activities').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  app.post('/activities', (req, res) => {

      db.collection('Activities').insert(req.body, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

};
