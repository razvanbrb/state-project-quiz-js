"use strict";

console.log("--- loading handler: CorrectAnswer");

function Correct(questions, quizContainer, resultsContainer){
	debugger;
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i < questions.length; i++){

		// find selected answer -- I cant find selected answer!!
		// how to get value of input: selected radio buttons
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer === questions[i].correct){
			// add to the number of correct answers
			numCorrect++;
					}
		
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
