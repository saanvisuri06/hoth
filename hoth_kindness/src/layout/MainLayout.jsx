import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <>
    <div className='font-itim'>Layout</div>
    <Outlet />
    </>
  )
}

export default MainLayout