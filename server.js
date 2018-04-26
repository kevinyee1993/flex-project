const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

//TODO:
//go to https://dashboard.heroku.com/apps/convogenius/settings
//instead of convogenius it's name of our app
//create a new key value pair where key is mongoURL and the value
//is the url to connect to database with aka
//'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject'
const db             = process.env.mongoURL || require('./config/db');

const app            = express();

const port = 8000;

//express can't process url encoded forms on its own
//bodyParser downloaded helps us out with that

//need bodyParser if passing in JSON as body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//console logs all the routes that are accessible
console.log(app._router.stack);

//importing routes for the server to use
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
