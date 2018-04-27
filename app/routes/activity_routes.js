var ObjectID = require('mongodb').ObjectID;
const { spawn } = require('child_process');



function doSomething(dataInt) {
  const process = spawn('python', ['../../predict.py', dataInt]);
  process.stdout.on('data', (data) => {
    // res.send(`stdout: ${data}`);
    return data;
  });
}

// want to append the survey answers to the end of the url
module.exports = function(app, db) {

  app.get('/activities/survey/:data', (req, res) => {

    let dataSplit = req.params.data.split("");
    let dataInt = [];
    dataSplit.forEach(char => dataInt.push(parseInt(char)));
    res.send(dataInt);

    // console.log(doSomething(dataInt));
    // res.send(req.params.data.toString());

  });


  //find activity by name
  //use this url along with the name of an activity appended to it
  app.get('/activity/:name', (req, res) => {
    // const name = req.params.name;
    // const details = { 'name': new ObjectID(name) };
    console.log(req.params.name);

    db.collection("Activities").find({"name": req.params.name}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
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
