import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import ListEmployees from './components/ListEmployees';
import CreateEmployee from './components/CreateEmployee';
import NotFound from './components/NotFound';
// import AppHome from './components/AppHome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
  path:"/",
  // element:<AppHome />
  },
  {
    path:"/listEmployees",
    element:<ListEmployees />
  },
  {
    path:"/createEmployee",
    element:<CreateEmployee />
  },
  {
    path:"/*",
    element:<NotFound />
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
      <App />
    </React.StrictMode>
)
