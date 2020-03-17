'use strict';
const configs = require('./environment/config');
const startQuiz = require('./src/start-quiz');
process.stdout.write(configs.appName + '\n');
startQuiz.quizStarter();
