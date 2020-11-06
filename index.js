const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { data, randomTriviaQuestion, randomN, searchByDifficulty, searchByBoth, searchByCategory, searchById } = require('./import');
var lowercasePaths = require("express-lowercase-paths");

const app = express();

app.use(lowercasePaths())

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
    var string = "here";
var link = string.link("https://github.com/therealkingnull/Trivi");
   res.send("View a list of endpoints " + link)
});

//app.get('/ping', (req, res) => {
  //res.send('pong');
//});

app.get('/trivia', (req, res) => {
  res.json(randomTriviaQuestion());
});

app.get('/difficulty=:difficulty', (req, res) => {
    res.json(searchByDifficulty(req.params.difficulty, 1));
  });

app.get('/category=:category', (req, res) => {
    if (req.params.category.toLowerCase() !== req.perams.category) {
        var parsedUrl = url.parse(req.params.category)
        parsedUrl.pathname = parsedUrl.pathname.toLowerCase()
        res.redirect(url.format(parsedUrl))
      } else {
        next()
      }
      function next() {
    res.json(searchByCategory(req.params.category, 1))
      }
});

app.get('/id=:id', (req, res) => {
    res.json(searchById(req.params.id, 1))
});

app.get('/difficulty=:difficulty&category=:category', (req, res) => {
    var difficulty = req.params.difficulty;
    var category = req.params.category; 
 res.json(searchByBoth(difficulty, category, 1));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`im all good on ${PORT}`));