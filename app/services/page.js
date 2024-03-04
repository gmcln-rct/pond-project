// Quiz base on brazil-verbs
"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";

import QuizSelector from "../components/quiz-selector";

import createRandomQuestionsArray from "../_utils/randomArray";

export default function QuizPage() {
  const [verbTense, setVerbTense] = useState("present");
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const randomArray = createRandomQuestionsArray(verbTense);
  // console.log("Randoma array ", randomArray);

  return (
    <section>
      <h1>Quiz</h1>
      <p>Test your language ninja skills</p>
      <QuizSelector verbTense={verbTense} setVerbTense={setVerbTense} />
    </section>
  );
}
