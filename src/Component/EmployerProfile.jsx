import React from 'react';
import  { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  KeyRound,
  FilePlus2,
  Star,
  LogOut,
  Briefcase,
  Mail,
} from "lucide-react";

const EmployerProfile = () => {
  const { Employerdata } = useContext(AppContext);
 const { Employerlogout, employerProfile } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
      const role = localStorage.getItem("Role");
      if (role === "Emplyoer") {
        employerProfile();
      }
    }, []);
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
            
        
      {/* Main Content */}
      <div className="flex-1 p-1 overflow-auto" style={{marginTop:'150px', marginRight:'100px', marginLeft:'180px'}}>
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          {/* Header */}
          <div className="text-center mb-10">
            
            <h2 className="text-3xl font-bold text-green-600 mt-2">Employer Profile</h2>

            <img src="data:image/jpeg;base64,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" 
            alt=""  style={{marginLeft:'250px', marginTop:'50px'}}/>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <ProfileCard label="Name" value={Employerdata?.name || "N/A"} icon={<User size={20} />} />
            {/* Email */}
            <ProfileCard label="Email" value={Employerdata?.email || "N/A"} icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for profile display boxes
const ProfileCard = ({ label, value, icon }) => (
  <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
    <div className="text-green-600 mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-semibold">{label}</p>
      <p className="text-lg text-gray-800 font-bold break-all">{value}</p>
    </div>
  </div>
);

export default EmployerProfile;
