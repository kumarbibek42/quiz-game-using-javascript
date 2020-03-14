const csv = require('csv-parser');
const fs = require('fs');
const questionsLoader = require('./question-loader');
const questionsData = [];
const quizStarter = function() {
    fs.createReadStream(__dirname+ '../../questions/questions.csv')
	.pipe(csv())
	.on('data', (row) => {
		questionsData.push(row);
	})
	.on('end', () => {
        console.log('CSV file successfully processed');
		questionsLoader.loadQuestions(questionsData);
	})
	.on('error', () => {
		console.log("Unable to parse the file");
	});
};
const getQuestions = () => {
	return questionsData;
};
module.exports = {
	quizStarter,
	getQuestions
}