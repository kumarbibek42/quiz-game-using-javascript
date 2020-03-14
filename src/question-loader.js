const scoreCalculator = require('./score-calculator');
const rl = require('../environment/config').rl;
let answers = [];
const loadQuestions = (questions, ind=0) => {
	rl.question(questions[ind].question, (answer) => {
		answers.push(answer);
		ind++;
		if(answers.length<questions.length) {
			loadQuestions(questions,ind);
		} else {
			scoreCalculator.getScore(answers,questions);
			rl.close();
		}
	});
};
module.exports = {
	loadQuestions
};