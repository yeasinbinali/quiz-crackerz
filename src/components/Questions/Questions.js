import React from "react";
import './Questions.css'

const Questions = (props) => {
  const question = props.question;
  console.log(question);
  return (
    <div>
      <div className='question'>
      <p className='question-name'>{question.question}</p>
      <div className='question-option'>
        <div className='option'>
          <input type="radio"></input>
          <p>{question.options[0]}</p>
        </div>
        <div className='option'>
          <input type="radio"></input>
          <p>{question.options[1]}</p>
        </div>
        <div className='option'>
          <input type="radio"></input>
          <p>{question.options[2]}</p>
        </div>
        <div className='option'>
          <input type="radio"></input>
          <p>{question.options[3]}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Questions;
