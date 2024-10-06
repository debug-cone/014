// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import def
import App from './App.jsx'
import './index.css'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// axios
import axios from 'axios'
axios.defaults.baseURL="https://dummyjson.com"

// pages
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AuthGuarding from './utils/AuthGuarding.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/products',
        element: (
        <AuthGuarding>
          <ProductsPage />
        </AuthGuarding>
        ),
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
