import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  
  useEffect(
    // side effect function
    () => {
      setTimeout(()=>{
        let time = timeRemaining
        if(time === 0){
          setTimeRemaining(10);
          onAnswered(false);
        }else{
        setTimeRemaining(time - 1);
        }
        
      }, 1000);
      return () => clearTimeout()
    },[timeRemaining]
  );
  
  
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
