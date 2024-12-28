import React, { useState } from 'react';
import QUESTIONS from '../questions.js';
import trophy from '../assets/quiz-complete.png';

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const activeQuestionIndex = selectedAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    if(quizIsCompleted){
        return(
         <div id='summary'>
            <img src={trophy} alt="tropy of completing quiz"/>
            <h2>Quiz Completed</h2>
        </div>
        )
    }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

  const handleSelectedAnswer = (selectedAnswer) =>{
    setSelectedAnswers(prevState =>{
        return [...prevState, selectedAnswer];
    })
  }

  return (
    <div id='quiz'>
        <div id='question'>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

            <ul id='answers'>
                {
                    shuffledAnswers.map(answer =>(
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Quiz
