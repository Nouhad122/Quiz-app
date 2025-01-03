import React, { useState } from 'react';
import QuestionTime from './QuestionTime.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

const Question = ({ questIndex, onSkipAnswer, onSelectAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;
    
    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrect !== null){
        timer = 2000;
    }

    const handleSelectAnswer = (answer) =>{
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() =>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questIndex].answers[0] === answer
            })
            setTimeout(() =>{
                onSelectAnswer(answer);
            }, 2000)
        }, 1000)
    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? "correct" : "wrong";
    }
    else if(answer.selectedAnswer){
        answerState = "answered";
    }
  return (
    <div id='question'>
        <QuestionTime
          key={timer}
          onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
          timeout={timer}
          mode={answerState}
        />

        <h2>{QUESTIONS[questIndex].text}</h2>

        <Answers
            answers={[...QUESTIONS[questIndex].answers]}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelectAnswer={handleSelectAnswer}
        />
    </div>
  )
}

export default Question
