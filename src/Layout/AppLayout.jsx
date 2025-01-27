import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import {Outlet} from 'react-router-dom'
const AppLayout = () => {
  return (
    <div className='flex  main-wrapper'>
        <div className="sidebar basis-2xs h-screen bg-gray-500">
        <Sidebar/>
        </div>
        <div className="container mx-auto p-10 flex-1 content-side">
          <Outlet/>
        </div>
    </div>
  )
}

export default AppLayout