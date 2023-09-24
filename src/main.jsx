import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import ParentRoute from './routes/parentRoute/index.jsx'
import ChildRoute from './routes/parentRoute/childRoutes/index.jsx'

const router = createBrowserRouter([
  {
    id: "crumb:root",
    path: "/",
    element: <Root />,
    children: [
      {
        id: "crumb:parentRoute",
        path: "parentRoute",
        element: <ParentRoute />,
        children: [
          {
            id: "crumb:childRoute",
            path: "childRoute",
            element: <ChildRoute />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
