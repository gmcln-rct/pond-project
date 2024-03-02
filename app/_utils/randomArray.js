// create random array of 10,non-repeating numbers between 1 and 99

import { BRAZILIAN_VERBS } from "../data/brazil-verbs";

function createIncorrectAnswers(verbTenseConjugations, correctAnswer) {
  const incorrectAnswers = [];
  const allAnswersArray = Object.values(verbTenseConjugations);
  const correctAnswerIndex = allAnswersArray.indexOf(correctAnswer);
  allAnswersArray.splice(correctAnswerIndex, 1);
  // Create 2 incorrect answers
  let i= 0;
  while (i < 1) {
    const randomIndex = Math.floor(Math.random() * allAnswersArray.length);
    const randomAnswer = allAnswersArray[randomIndex];
    if(incorrectAnswers.includes(randomAnswer) || randomAnswer === correctAnswer) {
      console.log('found match', randomAnswer, " ", correctAnswer)
      continue;
    } else {
      incorrectAnswers.push(randomAnswer);
      allAnswersArray.splice(randomIndex, 1);
      i++;
    }
  }

  return incorrectAnswers;
}

export default function createRandomQuestionsArray(verbTense) {
  const randomArray = createRandomArray();

  const questionsArray = randomArray.map((verb) => {
    let answers = [];
    const verbTenseConjugations = verb[verbTense];
    const pronoun = choosePronoun();

    // console.log("pronoun", pronoun);
    // const verbConjugation = verbTenseConjugations[pronoun];
    // console.log("verbTenseConjugations", verbConjugation);
    const question = `${verb.name}: ${pronoun} _____?`;
    const correctAnswer = verbTenseConjugations[pronoun];
    const incorrectAnswers = createIncorrectAnswers(
      verbTenseConjugations,
      correctAnswer
    );
    const randomIndex = Math.floor(Math.random() * 3);
    incorrectAnswers.splice(randomIndex, 0, correctAnswer);
    let questionObj = {
      question,
      correctAnswer,
      incorrectAnswers,
    };
    console.log("questions obj ",
      questionObj
    );
    // const allAnswers = verbTenseConjugations;
    // answers.push(verbConjugation);

    return {
      question,
      correctAnswer,
    };
  });
  return questionsArray;
}

function choosePronoun() {
  const pronouns = ["eu", "ele", "nos", "eles"];
  const randomIndex = Math.floor(Math.random() * pronouns.length);
  return pronouns[randomIndex];
}
function createRandomArray() {
  const arrayNumbers = createRandomArrayNumbers();

  const randomVerbs = arrayNumbers.map((number) => {
    return BRAZILIAN_VERBS[number];
  });

  return randomVerbs;
}

function createRandomArrayNumbers() {
  const arr = [];
  while (arr.length < 10) {
    const r = Math.floor(Math.random() * 99) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
