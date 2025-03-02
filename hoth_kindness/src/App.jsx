import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { CiUser, CiLock } from "react-icons/ci";
import Dashboard from './Pages/Dashboard';
import TagPage from './Pages/TagPage';

const App = () => {
  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [
        {path: "/", element: <Login CiUser={CiUser} CiLock={CiLock}/>}, 
        {path: "/signup", element: <Signup />},
        //{path: "/home", element: <HomePage />},
        {path: "/home", element: <Dashboard />},
        {path: "/tag/:tagName", element: <TagPage />}
      ]}]);

return (
  <RouterProvider router={router} />
);
}

export default App

