const data = require('./data/trivia.json');

const randomTriviaQuestion = () => {
  return data[Math.floor(Math.random() * data.length)];
}

const randomN = (data, n) => {
    const limit = data.length < n ? data.length : n;
    const randomIndicesSet = new Set();
  
    while (randomIndicesSet.size < limit) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomIndicesSet.has(randomIndex)) {
        randomIndicesSet.add(randomIndex);
      }
    }
  
    return Array.from(randomIndicesSet).map(randomIndex => {
      return data[randomIndex];
    });
  };

  const searchByDifficulty = (difficulty1, n) => {
    return randomN(data.filter(data => data.difficulty === difficulty1), n);
  };

module.exports = { data, randomTriviaQuestion, randomN, searchByDifficulty }