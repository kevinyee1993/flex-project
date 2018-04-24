var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/lodging/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('Lodging').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });

  });

  app.post('/lodging', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('Lodging').insert(note, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });

};
