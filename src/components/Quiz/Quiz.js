import React from 'react';
import { useLoaderData } from 'react-router';

const Quiz = () => {
    const questions = useLoaderData().data.questions;
    for(const question of questions){
        console.log(question);
    }
    return (
        <div>
            <h2>All quizes are here</h2>
        </div>
    );
};

export default Quiz;