import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <>
    <div>Layout</div>
    <Outlet />
    </>
  )
}

export default MainLayout