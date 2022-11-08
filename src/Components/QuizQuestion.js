import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestion = () => {
    const quizQuestion = useLoaderData();
    return (
        <div>
            {
                quizQuestion.map(question => {
                    <div className='drop-shadow-md'>
                        <h4></h4>
                        <div className='grid grid-cols-2'>
                            <div className='drop-shadow-md'>{question.p}</div>
                            <div className='drop-shadow-md'></div>
                            <div className='drop-shadow-md'></div>
                            <div className='drop-shadow-md'></div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default QuizQuestion;