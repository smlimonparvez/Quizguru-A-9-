import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analysis from './Components/Analysis';
import Blog from './Components/Blog';
import Hero from './Components/Hero';
import QuizQuestion from './Components/QuizQuestion';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Hero></Hero>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Hero></Hero>
        },
        {
          path:'quiz/:quizId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizQuestion></QuizQuestion>
        },
        { path: '/analysis', element: <Analysis></Analysis> },
        { path: '/blog', element: <Blog></Blog> }
      ]
    },
    { path: '*', element: <div className='font-medium text-3xl text-center ' style={{ marginTop: '20%', color:'goldenrod' }}>Please Click Right Menu Option.</div> }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
