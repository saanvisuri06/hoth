import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { CiUser, CiLock } from "react-icons/ci";
import Dashboard from './Pages/Dashboard';
import TagPage from './Pages/TagPage';
import ImageUpload from './Pages/ImageUpload';

const App = () => {

  const dashboardData = [
    { header: 'Post 1', title: 'A Women in Tech', tags: ['Metoo', 'Tech'], value: 'The fight for gender equity in #Tech continues. Stand with survivors, support #Metoo initiatives, and advocate for systemic change.' },
    { header: 'Post 2',title: 'Post 2', tags: ['Metoo'], value: 'This is post 2' },
    { header: 'Post 3',title: 'Post 3', tags: ['bruh'], value: 'This is post 3' },
    { header: 'Post 4',title: 'Post 4', tags: ['Metoo'], value: 'This is post 4' },
    { header: "Post 5", title : 'HRHR', tags: ['Hola', 'Metoo'], value: "1234"},
    { header: "Post 6",title : 'rrrrr', tags: ['Internet', 'Tech'],value: "1231231"},
    { header: "Post 7",title : 'wswww', tags: ['Special Day'], value: "12123123"},
    { header: "Post 8",title : 'ppppp', tags: ['ICU Day'],value: "8987"},
  ];

  const router = createBrowserRouter([{ 
      path: "",
      element: <MainLayout />, 
      children: [
        {path: "/", element: <Login CiUser={CiUser} CiLock={CiLock}/>}, 
        {path: "/signup", element: <Signup CiUser={CiUser} CiLock={CiLock}/>},
        {path: "/ImageUpload", element: <ImageUpload />},
        //{path: "/home", element: <HomePage />},
        {path: "/home", element: <Dashboard dashboardData={dashboardData}/>},
        {path: "/tag/:tagName", element: <TagPage dashboardData={dashboardData}/>}
      ]}]);

      

return (
  <RouterProvider router={router} />
);
}

export default App

