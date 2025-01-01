import React, { useEffect, useState } from 'react'

const QuestionTime = ({onTimeout, timeout, mode}) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() =>{
    const timer = setTimeout(onTimeout,timeout);
    return () => clearTimeout(timer);
  },[onTimeout, timeout]);

  useEffect(() =>{
    const intervTime = setInterval(() =>{
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
    },100);
    return () => clearInterval(intervTime);
  },[]);

  return (
    <progress max={timeout} value={remainingTime} className={mode}/>
  )
}

export default QuestionTime
