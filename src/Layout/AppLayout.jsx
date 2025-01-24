import React from 'react'
import Sidebar from '../components/ui/Sidebar'
import {Outlet} from 'react-router-dom'
const AppLayout = () => {
  return (
    <div className='flex'>
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="main-content">
          <Outlet/>
        </div>
    </div>
  )
}

export default AppLayout