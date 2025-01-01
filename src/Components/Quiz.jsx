import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import trophy from '../assets/quiz-complete.png';
import Question from './Question.jsx';

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const activeQuestionIndex = selectedAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) =>{
    setSelectedAnswers(prevState =>{
        return [...prevState, selectedAnswer];
    })
  },[]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if(quizIsCompleted){
    return(
     <div id='summary'>
        <img src={trophy} alt="trophy of completing quiz"/>
        <h2>Quiz Completed</h2>
    </div>
    )
}

  return (
    <div id='quiz'>
        <Question 
          key={activeQuestionIndex}
          questIndex={activeQuestionIndex}
          onSkipAnswer={handleSkipAnswer}
          onSelectAnswer={handleSelectAnswer}
        />
    </div>
  )
}

export default Quiz
