import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import AdminSideBar from './AdminSideBar';
import { Outlet } from 'react-router';
const AdminLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen]=useState(false);
  const toggleSidebar =()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
       {/* Mobile toggle */}
       <div className='flex md:hidden p4 bg-gray-900 text-white z-20'>
        <button onClick={toggleSidebar}>
           <FaBars size={20} />
        </button>
        <h1 className='ml-4 text-xl font-medium'>Admin DashBoard</h1>
       </div>

       {/* overlay for mobile sidebar */}
       {isSidebarOpen &&(
        <div className='fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden ' onClick={toggleSidebar}>

        </div>
       )}

       {/* sidebar */}
       <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform
         ${isSidebarOpen ? 'translate-x-0': "-translate-x-full"} transition-transform
          duration-300 md:translate-x-0 md:static md:block z-20`}>
            <AdminSideBar/>
          </div>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>  
  )
}

export default AdminLayout
