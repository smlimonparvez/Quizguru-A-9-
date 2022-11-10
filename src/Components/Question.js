import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questionCard }) => {
    const { options, question, correctAnswer } = questionCard;
    const notify = () => toast(JSON.stringify({ correctAnswer }));
    const answerChecker1 = () => {
        if (options[0] === correctAnswer) {
            toast('Your answer is correct 👍')
        }
        else {
            toast('Your answer is wrong 😥')
        }
    }
    const answerChecker2 = () => {
        if (options[1] === correctAnswer) {
            toast('Your answer is correct 👍')
        }
        else {
            toast('Your answer is wrong 😥')
        }
    }
    const answerChecker3 = () => {
        if (options[2] === correctAnswer) {
            toast('Your answer is correct 👍')
        }
        else {
            toast('Your answer is wrong 😥')
        }
    }
    const answerChecker4 = () => {
        if (options[3] === correctAnswer) {
            toast('Your answer is correct 👍')
        }
        else {
            toast('Your answer is wrong 😥')
        }
    }

    return (
        <div className='shadow-lg mx-auto my-10 bg-slate-50 rounded w-2/4 p-10'>
            <div className='flex justify-between align-middle mb-4'>
                <p><span className='font-medium'>Question:</span> {question}</p>
                <h3><Link><FaEye onClick={notify}></FaEye></Link></h3>
                <ToastContainer />
            </div>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className="form-control shadow-md rounded p-5 hover:bg-slate-300">
                    <label className="label cursor-pointer" >
                        <input type="radio" name="answer" className="radio-xs checked:bg-blue-500" checked onClick={answerChecker1} />
                        <span className="label-text">{options[0]}</span>
                    </label>
                </div>
                <div className="form-control shadow-md rounded p-5 hover:bg-slate-300">
                    <label className="label cursor-pointer" >
                        <input type="radio" name="answer" className="radio-xs checked:bg-blue-500" checked onClick={answerChecker2} />
                        <span className="label-text">{options[1]}</span>
                    </label>
                </div>
                <div className="form-control shadow-md rounded p-5 hover:bg-slate-300">
                    <label className="label cursor-pointer" >
                        <input type="radio" name="answer" className="radio-xs checked:bg-blue-500" checked onClick={answerChecker3} />
                        <span className="label-text">{options[2]}</span>
                    </label>
                </div>
                <div className="form-control shadow-md rounded p-5 hover:bg-slate-300">
                    <label className="label cursor-pointer" >
                        <input type="radio" name="answer" className="radio-xs checked:bg-blue-500" checked onClick={answerChecker4} />
                        <span className="label-text">{options[3]}</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Question;