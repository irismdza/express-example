const express = require('express');
const pg = require('pg-promise')({});
const cors = require('cors');
const app = express();

const PORT = 3000;

const db = pg({
  host: 'localhost',
  port: 5432,
  database: 'express3',
  user: 'express3user',
  password: 'password'
});

app.use(express.static(__dirname + '/react-app/build'));

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/somedata', cors(), (req, res) => {
  db.query("SELECT * FROM data")
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      console.log("ERROR GETTING DATA: ", error);
      res.status(500).end();
    });
  // res.send({ message: 'SOME DATA WITH CORS ENABLED' });
})

app.listen(PORT, (req, res) => {
  console.log(`Express app listening at ${PORT}!`);
})