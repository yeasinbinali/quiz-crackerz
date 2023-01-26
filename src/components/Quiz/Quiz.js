import React from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const questionsLoading = useLoaderData().data;
    const questions = questionsLoading.questions;
    console.log(questions);
    // for(const question of questions){
    //     console.log(question);
    // }
    return (
        <div>
            <h3 className='header-name'>Quiz of {questionsLoading.name}</h3>
            {
                questions.map(question => <Questions
                    key = {question.id}
                    question = {question}
                ></Questions>)
            }
        </div>
    );
};

export default Quiz;