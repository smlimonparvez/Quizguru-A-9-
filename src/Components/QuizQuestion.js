import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const quizQuestion = useLoaderData();
    console.log(quizQuestion);
    return (
        <div>
            {
                quizQuestion.data.questions.map(questionCard => <Question key={questionCard.id} questionCard={questionCard}></Question>)
            }        
        </div>
    );
};

export default QuizQuestion;