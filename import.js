const data = require('./data/trivia.json');


//Random Trivia Question
const randomTriviaQuestion = () => {
  return data[Math.floor(Math.random() * data.length)];
}


//Get random trivia from the json file
const randomN = (dataArray, n) => {
    const limit = dataArray.length < n ? dataArray.length : n;
    const randomIndicesSet = new Set();
  
    while (randomIndicesSet.size < limit) {
      const randomIndex = Math.floor(Math.random() * dataArray.length);
      if (!randomIndicesSet.has(randomIndex)) {
        randomIndicesSet.add(randomIndex);
      }
    }
  
    return Array.from(randomIndicesSet).map(randomIndex => {
      return dataArray[randomIndex];
    });
  };


  //Search by difficulty
  const searchByDifficulty = (difficulty, n) => {
    return randomN(data.filter(data => data.difficulty === difficulty), n);
  };


  //Search by difficulty & category
  const searchByBoth = (difficulty, category, n) => {
    return randomN(data.filter(data => data.difficulty === difficulty && data.category === category), n);
  };


  //Export
module.exports = { data, randomTriviaQuestion, randomN, searchByDifficulty, searchByBoth }