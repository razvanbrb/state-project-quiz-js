


function generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton){


	// calling showQuestions Function
	showQuestions(quizQuestions, quizContainer);

	// call showResults function when the user clicks the submit button
	submitButton.onclick = function(){
		showResults(quizQuestions, quizContainer, resultsContainer);
    }
    
}

// call the main function to generate the quiz

generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);
