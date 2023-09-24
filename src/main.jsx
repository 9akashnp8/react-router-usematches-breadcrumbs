import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Route1 from './routes/route1.jsx'
import Route2 from './routes/route2.jsx'
import Route12 from './routes/route12.jsx'
import Route11 from './routes/route11.jsx'

const router = createBrowserRouter([
  {
    id: "root",
    path: '/',
    element: <App />,
    handle: {
      crumb: {
        name: "root",
        path: "/"
      },
    },
    children: [
      {
        id: "route1",
        path: "route1",
        element: <Route1 />,
        handle: {
          crumb: {
            name: "route1",
            path: "/route1"
          },
        },
        children: [
          {
            id: "route11",
            path: "route11",
            element: <Route11 />,
            handle: {
              crumb: {
                name: "route11",
                path: "/route11"
              },
            }    
          },
          {
            id: "route12",
            path: "route12",
            element: <Route12 />,
            handle: {
              crumb: {
                name: "route12",
                path: "/route12"
              },
            }   
          }          
        ]    
      },
      {
        id: "route2",
        path: "route2",
        element: <Route2 />    
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
