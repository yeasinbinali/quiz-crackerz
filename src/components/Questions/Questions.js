import React, { useState } from "react";
import "./Questions.css";

const Questions = (props) => {
  const question = props.question;
  console.log(question);
  const [response, setResponse] = useState('');
  const handleQuestion = isCorrect => {
    if(isCorrect === question.correctAnswer){
      setResponse('Answer is Correct');
    }else{
      setResponse(`${isCorrect} -> Sorry! This is Incorrect`);
    }
  }
  return (
    <div>
      <div className="question">
        <p className="question-name">{question.question}</p>
        <div>
          <ul className="question-option">
            {question.options.map((option) => {
              return (
                <li onClick={() => handleQuestion(option)} className="option">
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
        {response}
      </div>
    </div>
  );
};

export default Questions;
