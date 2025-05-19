import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Boards from './components/pages/Boards.jsx'
import BoardDetails from './components/pages/BoardDetails.jsx'

const router= createBrowserRouter([
  {path: '/', element: <Boards/>},
  {path: '/boards/:board', element: <BoardDetails/>},
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
