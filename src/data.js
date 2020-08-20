/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
  // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
};

let quizQuestions = [
  {
    text: "Which of the following is an advantage of using JavaScript?",
    answers: [
      "Less server interaction",
      "Immediate feedback to the visitors",
      "Both of the above",
    ],
    correct: 2,
    selected: -1,
  },
  {
    text: "How can you get the type of arguments passed to a function?",
    answers: [
      "Using typeof operator",
      "Using getType function",
      "None of the above",
    ],
    correct: 0,
    selected: -1,
  },

  {
    text:
      "Which built-in method removes the last element from an array and returns that element?",
    answers: ["Last()", "Get()", "Pop()"],
    correct: 2,
    selected: -1,
  },

  {
    text: "Which built-in method sorts the elements of an array?",
    answers: ["Order()", "Sort()", "None of the above"],
    correct: 1,
    selected: -1,
  },

  {
    text:
      "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    answers: ["Concat()", "Pop()", "Push()"],
    correct: 0,
    selected: -1,
  },

  {
    text:
      "Which of the following function of Array object calls a function for each element in the array?",
    answers: ["Concat()", "For each()", "Filter()"],
    correct: 1,
    selected: -1,
  },
];
