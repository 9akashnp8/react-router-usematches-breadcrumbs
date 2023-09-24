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
    path: "/",
    element: <Root />,
    handle: {
      crumb: {
        show: true,
        name: "root",
      },
    },
    children: [
      {
        path: "parentRoute",
        element: <ParentRoute />,
        handle: {
          crumb: {
            show: true,
            name: "parentRoute",
          },
        },
        children: [
          {
            path: "childRoute",
            element: <ChildRoute />,
            handle: {
              crumb: {
                show: true,
                name: "childRoute",
              },
            }
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
