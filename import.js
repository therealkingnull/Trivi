const data = require('./data/trivia.json');

const randomTriviaQuestion = () => {
  return data[Math.floor(Math.random() * data.length)];
}

module.exports = {data, randomTriviaQuestion}