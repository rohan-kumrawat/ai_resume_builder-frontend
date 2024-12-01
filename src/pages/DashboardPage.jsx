import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard!</h1>
      <button
  onClick={() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }}
  className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
>
  Logout
</button>

    </div>
  );
};

export default DashboardPage;
