import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4><span className='font-medium'>Question:</span> What is the purpose of react router?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span> Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases. With the useContext hook, the context object is used as an injection token to access its value. If the value is an object, it can be easily deconstructed to separate constants.</p>
            </div>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4><span className='font-medium'>Question:</span> How does context api work?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4><span className='font-medium'>Question:</span> Write the use purpose of useRef?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;