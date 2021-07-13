/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element
const mainElement = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const firstAnswer = prompt('is javascript a programming language?');
if (firstAnswer.toUpperCase() === 'YES') {
    correctAnswers += 1;
}

const secondAnswer = prompt('what is a boolean considered?');
if (secondAnswer.toUpperCase() === 'DATATYPE') {
    correctAnswers += 1;
}

const thirdAnswer = prompt('what is used to style webpages?');
if (thirdAnswer.toUpperCase() === 'CSS') {
    correctAnswers += 1;
}

const fourthAnswer = prompt('is node.js used for backend programming?');
if (fourthAnswer.toUpperCase() === 'YES') {
    correctAnswers += 1;
}

const fifthAnswer = prompt('what keyword do you use to declare a constant variable?');
if (fifthAnswer.toUpperCase() === 'CONST') {
    correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
    rank = 'Gold';
} else if (correctAnswers >= 3) {
    rank = 'Silver';
} else if (correctAnswers >= 2) {
    rank = 'Bronze';
} else {
    rank = 'no crown :(';
}

// 6. Output results to the <main> element

mainElement.innerHTML =
    `<h2>You got ${correctAnswers} out of 5 questions correct.</h2>
<p>Your rank is <strong>${rank}!</strong></p>`;
