const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const path           = require('path');
const app            = express();

const port = process.env.PORT || 8000;

//express can't process url encoded forms on its own
//bodyParser downloaded helps us out with that

// connect to html in this file
app.use(express.static('./'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


//need bodyParser if passing in JSON as body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importing routes for the server to use
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
