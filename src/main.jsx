import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from "./Components/About/About"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Contact from './Components/Contacts/Contact.jsx'
import ErrorPage from './Components/ErrorPage404/ErrorPage.jsx'
const appRouter = createBrowserRouter([

  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  },
  // {
  //   path:"/*",
  //   element: <App />
  // }

  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
