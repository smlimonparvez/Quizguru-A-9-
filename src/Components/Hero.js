import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Hero = () => {
    const quizCards = useLoaderData();

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://cdn.pixabay.com/photo/2018/09/22/12/31/cat-3695213_960_720.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome To Quiz Guru!</h1>
                        <p className="py-6">In the world of education there are many different ways to teach and to consolidate what has been learned. In years gone by, children were expected to memorise dates, formulae and figures by rote. But this method of teaching can be quite dull, to say the least! One tool becoming more common, especially in online education, is quizzes. In this guide we’ll find out the many reasons why quizzes are valuable in learning.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 my-20 ml-20'>
                {
                    quizCards.data.map(quizCard => <QuizCard key={quizCard.id} quizCard={quizCard}></QuizCard>)
                }
            </div>
        </>
    );
};

export default Hero;