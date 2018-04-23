const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app            = express();

const port = 8000;

//express can't process url encoded forms on its own
//bodyParser downloaded helps us out with that
app.use(bodyParser.urlencoded({ extended: true }));

//importing routes for the server to use
//note, because we don't have db setup yet, just using an empty object
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
