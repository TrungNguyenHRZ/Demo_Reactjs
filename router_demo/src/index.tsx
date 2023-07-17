import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from './screens/Root';
import ErrorPage from './screens/ErrorPage';
import Contact from './screens/Contact';
import Posts from './screens/Posts';
import Post from './screens/Posts/Post';
import Comments from './screens/Comments';
import Comment from './screens/Comments/Comment';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />
      },
      {
        path: "/posts",
        element: <Posts />
      },
      {
        path: "/posts/:postId",
        element: <Post />
      },
      {
        path: "/posts/:postId/comments",
        element: <Comments />
      },
      {
        path: "/posts/:postId/comments/:commentId",
        element: <Comment />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
