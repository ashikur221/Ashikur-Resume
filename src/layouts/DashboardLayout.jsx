import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import AdminNavbar from '../components/adminSide/AdminNavbar';
import Sidebar from '../components/adminSide/sidebar/SideBar';



const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <AdminNavbar></AdminNavbar>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8 overflow-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;