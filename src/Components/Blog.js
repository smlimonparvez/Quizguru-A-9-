import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <div className='shadow-lg text-center w-2/4 mx-auto p-5 rounded bg-slate-100 mb-5'>
                <h4><span className='font-medium'>Question:</span> What is the purpose of react router?</h4>
                <p><span className='font-medium'>Answer:</span></p>
            </div>
            <div className='shadow-lg text-center w-2/4 mx-auto p-5 rounded bg-slate-100 mb-5'>
                <h4><span className='font-medium'>Question:</span> How does context api work?</h4>
                <p><span className='font-medium'>Answer:</span></p>
            </div>
            <div className='shadow-lg text-center w-2/4 mx-auto p-5 rounded bg-slate-100 mb-5'>
                <h4><span className='font-medium'>Question:</span> Write the use purpose of useRef?</h4>
                <p><span className='font-medium'>Answer:</span></p>
            </div>
        </div>
    );
};

export default Blog;