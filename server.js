const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
// const db             = require('./config/db');

const app            = express();
const port = 8000;





//express can't process url encoded forms on its own
//bodyParser downloaded helps us out with that
app.use(bodyParser.urlencoded({ extended: true }));

//importing routes for the server to use
// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err);
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// });

app.listen(port, ()=> {
  console.log('Hello world');
});

// const pip = spawn('pip', ['install', '-r', 'requirements.txt']);

// pip.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

//
// pip.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
//
// source.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
