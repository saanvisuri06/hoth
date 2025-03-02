import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <>
    <div 
    className="flex items-center justify-center h-screen bg-blue-500 text-white text-3xl">Layout</div>
    <Outlet />
    </>
  )
}

export default MainLayout