import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import TagPage from './Pages/TagPage';

const App = () => {
  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [{path: "/", element: <Login />}, 
        {path: "/home", element: <HomePage />},
        {path: "/dashboard", element: <Dashboard />},
        {path: "/tag/:tagName", element: <TagPage />}
      ]}]);

return (
  <RouterProvider router={router} />
);
}

export default App

