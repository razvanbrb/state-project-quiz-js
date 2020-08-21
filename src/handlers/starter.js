"use strict";

// console.log("--- loading handler: _");

// const _ = (event) => {};

/* handlers define user interactions

they read user input
from events or from the DOM

they process user data using program logic functions

they communicate results to the user

they log any important information for developers

*/
function showQuestions(text, quizContainer) {
  debugger;
  // let output = [];
  let answers;
  for (let i = 0; i < text.length; i++) {
    answers = [];

    for (let k = 0; k < text[i].answers.length; k++) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question'+i+'" value="'+k+'" >' +
          (k + 1) +
          ": " +
          text[i].answers[k] +
          "</label>"
      );
    }
    const question = document.createElement("div");
    question.setAttribute("class", "question");
    question.innerHTML = text[i].text;
    const choice = document.createElement("div");
    choice.setAttribute("class", "answers");
    choice.innerHTML = answers.join("");

    quizContainer.appendChild(question);
    quizContainer.appendChild(choice);
  }
}

