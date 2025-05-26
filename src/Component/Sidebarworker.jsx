import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import {
  LayoutDashboard,
  User,
  Pencil,
  Lock,
  Eye,
  LogOut,
} from 'lucide-react';

const Sidebarworker = () => {
  const { Workerlogout } = useContext(AppContext);
  const navigate = useNavigate();

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
            <Link to="/workerProfile">
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <User size={18} /> My Profile
              </li>
              <br />
            </Link>
            <Link to="/workerEditprofile">
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <Pencil size={18} /> Edit Profile
              </li>
              <br />
            </Link>
            <Link to="/workerchangepassword">
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <Lock size={18} /> Change Password
              </li>
              <br />
            </Link>
            <Link to="/Viewrequest">
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <Eye size={18} /> View Request
              </li>
            </Link>
          </ul>
        </div>

        {/* Logout Button */}
        <button
          className="bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-blue-800"
          onClick={() => {
            Workerlogout();
            navigate('/Mainlogin');
          }}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content Area with Image */}
      <div className="flex-1 bg-gray-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to WorkNest!</h1>
          <img
            src="https://media.istockphoto.com/id/1142779656/photo/woman-clerk-sitting-holding-note-paper-sticker-with-welcome-to-the-team-phrase-business.jpg?s=612x612&w=0&k=20&c=nIIXe5myVGm8_8zT4mikGwGgkgcfjEl0fYg7xEd9cBQ="
            alt="Welcome to the Team"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebarworker;
