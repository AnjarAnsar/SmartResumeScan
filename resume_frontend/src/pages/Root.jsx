import React from 'react';
import { Outlet, Link } from 'react-router'; // ✅ Must include Outlet
import Navbar from '../components/Navbar.jsx'; // Importing Navbar component
function Root() {
  return (
    <div>
      {/* Navbar component can be imported here if needed */}
      <Navbar />  {/* ✅ Navbar component for navigation*/} 
      <Outlet /> {/* ✅ Outlet for nested routes*/}
    </div>
  );
}

export default Root;
