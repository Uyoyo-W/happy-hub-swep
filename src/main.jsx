import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './login-pages/Signup.jsx'
import Info from './login-pages/Info.jsx'
import Contact from './login-pages/Contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Signup",
    element: <Signup/>,
  },
  {
    path: "Info",
    element: <Info/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
