import React,{ useRef } from 'react'

const Answers = ({ answers, selectedAnswer, answerState, onSelectAnswer}) => {
    const shuffledAnswers = useRef();

     if(!shuffledAnswers.current){
            shuffledAnswers.current = answers.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id='answers'>
            {
                shuffledAnswers.current.map(answer =>{
                    const isSelected = selectedAnswer === answer;
                    let cssClass = '';
                    if(answerState === 'answered' && isSelected){
                            cssClass = "selected";
                    }
                    if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                        cssClass = answerState;
                    }
                    
                    return(
                    <li key={answer} className='answer'>
                        <button
                         onClick={() => onSelectAnswer(answer)}
                         className={cssClass}
                         disabled={answerState !== ''}
                         >
                            {answer}
                        </button>
                    </li>
                    )
                }
                    
                )
            }
                </ul>
    )
}

export default Answers
