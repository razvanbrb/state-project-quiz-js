# State: state-project-quiz-js


### Description

This is a collaborative HTML, CSS and JavaScript project. It consists of single dynamic webpage and several JS functions with the appropriate handlers. 
It could be useful to boost team-developing skills, to practice the knowledge of JavaScript, HTML5 and CSS3.

> For this project we use an incremental development pattern, according to which each issue was developed in its own Git branch, reviewed and then added to the main project.

---
## 0. SETUP

> On this step the project repo was created.

Steps:

- Create repo 
- Turn on GitHub Pages
- Create a GitHub Project Board
- Creat development-strategy file 
- Write User-stories
- Make and assign issues

__Assigned to Sayed__



---

## 1. User Story: As a user I can see a styled web page with many interesting quiz questions and choice of answers.



Steps:

- A new repo branch `main-quiz` was created.
- HTML was developed.
- CSS styling was added.
- ShowQuestions function was built.
- The GitHub pull request was reviewed by reviewers and the branch was merged to the `master` branch.

__Assigned to Yulia__

---


## 3. Generate Quiz:  

**As a user I don't care about the source code of a program such as functions, arrays, objects, ... But I want to see the questions, answers,...result**

__Assigned to Sayed__

Created on a branch called 'generateQuiz-function'

What I did in this branch are:

1. Added a function called `generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton)`
1. Inside of this function I called the functions `showQuestions(quizQuestions, quizContainer)`, `submitButton.onclick = function(){showResults(quizQuestions, quizContainer, resultsContainer); } ` to display the questions, answers and results
1. Fixed a small bug in the `showQuestions(quizQuestions, quizContainer)` because before fixing the bug, a user could select answer for only one question.
1. Added a script tag inside the index.html file for the js file `generateQuiz.js`

---

## 4. User Story: 

__Assigned to Razvan__

__A user can use a well-styled page__

Created on a branch 'show-questions-function'


---

## 5. View Score

__A user I want to see my score__

> On click, user should be able to submit the answers
> Calculate logic
> On click, user should be able to see their overall score

### REPO

- This user story is developed on the branch `score`
- This branch is merged to the `master` branch after completion.
- Development Strategy was updated

### HTML

- [ ] Create a place where the results will be shown
- [ ] A submit button `Your Result` was created
- [ ] Link logic, handler, listener (init/view)

### CSS

- [ ] Link to design where you can find css

### Views 


### Init


### Handlers

- [ ] Read user interaction
- [ ] Read state
- [ ] Find answers which are correct
- [ ] Perform core logic
- [ ] A user can get total score 
- [ ] Update state
- [ ] Re-rende UI from state
- [ ] Log action

### Listeners

- [ ] Clicking submit button, should show the total overall result 
- [ ] Add event listener for click and the corresponding function

### Logic

- [ ] Write tests
- [ ] Calculate results

### State

### Logging


__Assigned to Anna__

---

## 6. User Story: 

__Assigned to Razvan__

__A user can__

Created on a branch 'show-questions-function'

---

## Finished touched

Check validation

__Assigned to Murielle__
Created on a branch 'finish touch'
