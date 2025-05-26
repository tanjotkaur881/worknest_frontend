import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

import {
  LayoutDashboard,
  User,
  KeyRound,
  Briefcase,
  Eye,
  Star,
  LogOut,
} from 'lucide-react';

const Sidebaremployer = () => {
  const { Employerlogout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ---------- LEFT: Sidebar ---------- */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-green-400 text-white p-4 flex flex-col justify-between" style={{width:'300px'}}>
        {/* Top Branding */}
        <div>
          <div className="text-2xl font-bold mb-6">
            <span className="text-yellow-300">WORKNEST</span>
            <p className="text-xs text-white/80">Go Smarter, Not Harder</p>
          </div>

          {/* Sidebar Menu */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <LayoutDashboard size={18} /> Employer Dashboard
            </li>
             <br />
            <Link to={`/employerProfile`}><li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <User size={18} /> My Profile   
            </li></Link>

            <br />
            
            <Link to={`/Employerchangepassword`}>
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer /10">
              <KeyRound size={18} /> Edit Password
            </li>
</Link>
<br />
<Link to={`/Alljobs`}>
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer ">
              <Briefcase size={18} /> All Jobs
            </li>
            </Link>
            <br />
            <Link to={`/Reviews`}>  <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                          <Star size={18} /> Reviews
                        </li>
                        </Link>
          </ul>
        </div>

        {/* Logout Button */}
        <button
          className="bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-blue-800"
          onClick={() => {
            Employerlogout();
            navigate('/Mainlogin');
          }}
        ><LogOut size={18} /> Logout
                </button>
              </div>
        

      {/* Right Content */}
      <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-12">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">
          Welcome to WorkNest!
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl w-full">
          <img
            src="https://blog.labourcard.in/wp-content/uploads/2024/02/labour.png"
            alt="Welcome"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebaremployer;
