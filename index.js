const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { data, randomTriviaQuestion } = require('./import');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
    var str = "Check out the repository on github";
var result = str.link("https://github.com/therealkingnull/Halloween-API");
  res.send('Add /halloween_joke, /halloween_fact, /halloween_movie, or /halloween_image to the end of the URL to get your data <br>' + result + '</br>');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/trivia', (req, res) => {
  res.json(randomHalloweenFact());
});

app.get('/halloween_joke', (req, res) => {
  res.json(randomHalloweenJoke());
});

app.get('/halloween_image', (req, res) => {
  res.json(randomHalloweenImage());
});

app.get('/halloween_movie', (req, res) => {
  res.json(randomHalloweenMovie());
});



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));