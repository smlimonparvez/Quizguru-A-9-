import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const QuizCard = ({ quizCard }) => {
    const { id, name, logo, total } = quizCard;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <p className='font-medium text-xl'>Total Quiz {total}</p>
                    <button className="btn btn-primary"><Link className='flex' to={`/quiz/${id}`}>Go To Quiz<FaArrowRight className='ml-1'></FaArrowRight></Link></button>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;