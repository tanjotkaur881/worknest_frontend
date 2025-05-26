import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import { toast,Bounce } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  LayoutDashboard,
  User,
  Pencil,
  Lock,
  Eye,
  Star,
  LogOut,
} from 'lucide-react';

const WorkerChangePassword = () => {

  const[old, setOld]= useState("")
  const[nw, setNw]= useState("")
  const[cpw, setCpw]= useState("")
  const navigate = useNavigate();
  const { Workerlogout, WorkerchangePassword } = useContext(AppContext);
  const f1 = async (e) => {
    e.preventDefault();
    console.log("Start function");
    console.log({ old, nw, cpw });
  
    if (nw === cpw) {
      try {
        const response = await WorkerchangePassword(old, nw);
        console.log("response", response);
        toast('🦄 Successfully changed password!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setOld("");
        setNw("");
        setCpw("");
      } catch (error) {
        console.error("Password change error", error);
      }
    } else {
      
      toast.error('🦄 Password and Confirm Password do not match!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });


    }
  };

  return (
     <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-green-400 text-white p-4 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Branding */}
          <div className="text-2xl font-bold mb-6">
            <span className="text-yellow-300">WORKNEST</span>
            
            <p className="text-xs text-white/80">Go Smarter, Not Harder</p>
          </div>

          {/* Menu Items */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <LayoutDashboard size={18} /> Worker Dashboard
            </li>
            <br />
            <Link to={`/workerProfile`}><li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <User size={18} /> My Profile
            </li></Link>
            <br />
           <Link to={`/workerEditprofile`}> <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <Pencil size={18} /> Edit Profile
            </li></Link>
            <br />
          <Link to={`/workerchangepassword`}>  <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <Lock size={18} /> Change Password
            </li></Link>
            <br />
             <Link to={`/Viewrequest`}>
                          <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                            <Eye size={18} /> View Request
                          </li>
                        </Link>
            <br />
            
          </ul>
        </div>

        {/* Logout Button */}
        <button className="bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-blue-800"
        onClick={() => {
            Workerlogout();
            navigate("/Mainlogin");
          }}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* ---------- RIGHT: Change Password Panel ---------- */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-gray-200" style={{marginLeft:'-6px'}}
        > 
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Change Password</h2>
            <p className="text-sm text-gray-500 mt-1">Keep your account secure</p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={f1}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Old Password
              </label>
              <input
                type="password"
                value={old}  onChange={(e)=>setOld(e.target.value)}
                placeholder="Enter old password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={nw}  onChange={(e)=>setNw(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={cpw}  onChange={(e)=>setCpw(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-white font-semibold rounded-md bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
            >
              Update Password
            </button>
          </form>

          {/* Info Text */}
          <div className="text-center text-xs text-gray-400 mt-6">
            Make sure your password is strong and unique.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerChangePassword;
