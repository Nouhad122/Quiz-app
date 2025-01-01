import React, { useEffect, useState } from 'react'

const QuestionTime = ({onTimeout, timeout}) => {
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
    <progress max={timeout} value={remainingTime}/>
  )
}

export default QuestionTime
