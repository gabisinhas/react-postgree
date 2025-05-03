import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import ListEmployees from './components/ListEmployees';
import EditEmployee from './components/EditEmployee';
import CreateEmployee from './components/CreateEmployee';
import EmployeeForm from './components/EmployeeForm';
import NotFound from './components/NotFound';
import AppHome from './components/AppHome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppHome />
  },
  {
    path: "/listEmployees",
    element: <ListEmployees />
  },
  {
    path: "/employeeForm",
    element: <EmployeeForm />
  },
  {
    path: "/createEmployee",
    element: <CreateEmployee />
  },
  {
    path: "/editEmployee/:id",
    element: <EditEmployee />
  },
  {
    path: "/*",
    element: <NotFound />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
      <App />
    </React.StrictMode>
)
