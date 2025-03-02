import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import { CiUser, CiLock } from "react-icons/ci";



const App = () => {
  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [{path: "/", element: <Login />}, {path: "/", element: <SignIn CiUser={CiUser} CiLock={CiLock}/>},
        {path: "/home", element: <HomePage />}
      ]}]);

return (
  <RouterProvider router={router} />
);
}

export default App

