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

// const db             = require('./config/db');
const path           = require('path');
const app            = express();

// const port = 8000;
const port = process.env.PORT || 8000;

<<<<<<< HEAD
//TODO: dependencies not working here for some reason
const virtualenv = require('python-virtualenv');
const { spawn } = require('child_process');
virtualenv.installEnv();
virtualenv.installPackage('numpy');
virtualenv.installPackage('pandas');
virtualenv.installPackage('python-dateutil');
virtualenv.installPackage('scikit-learn');
virtualenv.installPackage('six');
virtualenv.installPackage('pytz');
virtualenv.installPackage('scipy');
const source = spawn('pip', ['freeze']);
source.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const virtualenv = require('python-virtualenv');
const { spawn } = require('child_process');
virtualenv.installEnv();
virtualenv.installPackage('numpy');
virtualenv.installPackage('pip');
virtualenv.installPackage('pandas');
virtualenv.installPackage('python-dateutil');
virtualenv.installPackage('scikit-learn');
virtualenv.installPackage('six');
virtualenv.installPackage('pytz');
virtualenv.installPackage('scipy');
const source = spawn('pip', ['freeze']);
source.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


//express can't process url encoded forms on its own
//bodyParser downloaded helps us out with that

// connect to html in this file
// app.use(express.static('public'));
app.use(express.static('./'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


//need bodyParser if passing in JSON as body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//console logs all the routes that are accessible
//   console.log(app._router.stack);

//need this to connect routes to database
//was taken off when winston added python stuff
//if any random errors, need to play with which one is commented out or not
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });




//winston had this, for the port listener
// app.listen(port, ()=> {
//   console.log('Hello world');
// });
