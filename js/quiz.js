function verify(answers, rightAnswers) {
    if (answers.toUpperCase() === rightAnswers) {
        correctAnswers += 1;
    }
}

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
verify(firstAnswer, 'YES');

const secondAnswer = prompt('what is a boolean considered?');
verify(secondAnswer, 'DATATYPE');

const thirdAnswer = prompt('what is used to style webpages?');
verify(thirdAnswer, 'CSS');

const fourthAnswer = prompt('is node.js used for backend programming?');
verify(fourthAnswer, 'YES');

const fifthAnswer = prompt('what keyword do you use to declare a constant variable?');
verify(fifthAnswer, 'CONST');

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
