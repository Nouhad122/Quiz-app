import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

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
     <Summary userAnswers = {selectedAnswers}/>
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
