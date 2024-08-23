import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryDetail from './pages/CategoryDetail.jsx'
import MealDetail from './pages/MealDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/category-detail/:category",
    element: <CategoryDetail />
  },
  {
    path: "/meal-detail/:idMeal",
    element: <MealDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
