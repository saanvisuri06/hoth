import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';

const App = () => {
  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [{path: "/", element: <Login />}, {path: "/home", element: <HomePage />}
      ]}]);

return (
  <RouterProvider router={router} />
);
}

export default App

