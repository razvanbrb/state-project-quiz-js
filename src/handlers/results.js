"use strict";

console.log("--- loading handler: showResults");

function showResults(quizQuestions, quizContainer, resultsContainer){
	debugger;
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i < quizQuestions.length; i++){

		// find selected answer -- I cant find selected answer!!
		// how to get value of input: selected radio buttons
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		const numberedUserAnswer = Number(userAnswer);

		// if answer is correct
		if(numberedUserAnswer === quizQuestions[i].correct){
			// add to the number of correct answers
answerContainers[i].style.color = "green";
numCorrect++;
} else {
console.log(answerContainers[i]);
answerContainers[i].style.color = "red";
}
}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + quizQuestions
	.length;
}


/* handlers define user interactions

they read user input
from events or from the DOM

they process user data using program logic functions

they communicate results to the user

they log any important information for developers

*/