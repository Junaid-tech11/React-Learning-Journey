import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from '../src/pages/Home';
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom'
import Protected from './components/Authlayout.jsx'
import { Login } from './components/index.js'
import { Signup } from './components/';
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import Post from './pages/Post'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>

        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication={true}>
            <AllPost />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication={true}>
            <AddPost />
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication={true}>
            <EditPost />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication={true}>
            <Post />
          </Protected>
        )
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)