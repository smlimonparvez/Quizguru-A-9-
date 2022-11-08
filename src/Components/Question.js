import React from 'react';

const Question = ({ questionCard }) => {
    const { options, id, question } = questionCard;
    return (
        <div className='shadow-lg mx-auto my-10 bg-slate-50 rounded w-2/4 p-10'>
            <p>{question}</p>
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1'>
                <div className='shadow-md rounded p-5 mr-3'>
                    <input type="checkbox"/> <label>{options[0]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                <input type="checkbox"/> <label>{options[1]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                <input type="checkbox"/> <label>{options[2]}</label>
                </div>
                <div className='shadow-md rounded p-5 mr-3'>
                <input type="checkbox"/> <label>{options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Question;