const data = require('./data/trivia.json');
const _ = require('lodash');
const randomTriviaQuestion = () => {
  return data[Math.floor(Math.random() * data.length)];
}

const searchByDifficulty = () => {
    let args = window.location.href.substring(52);
    var result = _.find(data.difficulty, {'difficulty': args});
        if (!result)
            console.log('Nothing found');
        else
            console.log("got something");
}

module.exports = {data, randomTriviaQuestion}