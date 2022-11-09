import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questionCard }) => {
    const { options, question, correctAnswer } = questionCard;
    const notify = () => toast(JSON.stringify({correctAnswer}));

    return (
        <div className='shadow-lg mx-auto my-10 bg-slate-50 rounded w-2/4 p-10'>
            <div className='flex justify-between align-middle mb-4'>
                <p><span className='font-medium'>Question:</span> {question}</p>
                <h3><Link><FaEye onClick={notify}></FaEye></Link></h3>
                <ToastContainer />
            </div>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1'>
                <div className='shadow-md rounded p-5 mr-3'>
                    <input type="radio" id='ans1' name='answer' /> <label>{options[0]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                    <input type="radio" id='ans2' name='answer' /> <label>{options[1]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                    <input type="radio" id='ans3' name='answer' /> <label>{options[2]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                    <input type="radio" id='ans4' name='answer' /> <label>{options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Question;