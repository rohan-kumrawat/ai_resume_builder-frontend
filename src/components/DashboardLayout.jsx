import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">Dashboard</div>
        <nav className="flex-1">
          <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/dashboard/jobs" className="block py-2 px-4 hover:bg-gray-700">
            Jobs
          </Link>
          <Link to="/dashboard/resume" className="block py-2 px-4 hover:bg-gray-700">
            Resume Builder
          </Link>
        </nav>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
          className="py-2 px-4 bg-red-600 hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
