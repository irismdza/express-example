const express = require('express');
const pgp = require('pg-promise')({});
const cors = require('cors');
const app = express();

const PORT = 3000;

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'express3',
  user: 'express3user',
  password: 'password'
});

// Use CORS to handle fetch requests from unbuilt react app running on webpack dev server:
process.env.NODE_ENV === 'Development' && app.use(cors({
  origin: 'http://localhost:3004'
}));

app.use(express.static(__dirname + '/public/build'));

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/somedata', (req, res) => {
  db.query("SELECT * FROM data")
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.log("ERROR GETTING DATA: ", error);
      res.status(500).end();
    });
  // res.send({ message: 'SOME DATA WITH CORS ENABLED' });
})

app.listen(PORT, (req, res) => {
  console.log(`Express app listening at ${PORT}!`);
})