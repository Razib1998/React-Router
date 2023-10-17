import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/User/:UserId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/Posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/Post/:PostId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
        element: <PostDetails></PostDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
