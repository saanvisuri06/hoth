import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Login';

const App = () => {
  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [{path: "/", element: <Login />}, 
      ]}]);

return (
  <RouterProvider router={router} />
);
}

export default App

