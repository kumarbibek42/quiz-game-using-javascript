'use strict';
const _ = require('lodash');
const configs = require('../environment/config');
const rl = configs.rl;
const getScore = (answers, questionsData) => {
  let correct = 0;
  questionsData = _.map(questionsData, ele => {
    return ele.answer;
  });
  questionsData.forEach((element, ind) => {
    if (answers[ind] == element) {
      correct++;
    }
  });
  process.stdout.write(`Your score is ${correct}/${questionsData.length}\n`);
};
const restartGame = () => {
  rl.question(configs.restartGameText, answer => {});
};
module.exports = {
  getScore,
  restartGame,
};
