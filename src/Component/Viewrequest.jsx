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
} from "lucide-react";

const Viewrequest = () => {
  const { Workerlogout, allRequest, Workerdata, allempdata } = useContext(AppContext);
  const navigate = useNavigate();

  // Filter requests belonging to the logged-in worker
  const filteredRequests = allRequest.filter(
    (request) => request.worker._id === Workerdata._id
  );

  // Function to get employer data
  const getempdata = (empId) => {
    return allempdata.find((b) => b._id === empId);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-green-400 text-white p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold mb-6">
            <span className="text-yellow-300">WORKNEST</span>
            <p className="text-xs text-white/80">Go Smarter, Not Harder</p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <LayoutDashboard size={18} /> Worker Dashboard
            </li>
            <br />
            <Link to={`/workerProfile`}>
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <User size={18} /> My Profile
              </li>
              <br />
            </Link>
            <Link to={`/workerEditprofile`}>
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <Pencil size={18} /> Edit Profile
              </li>
              <br />
            </Link>
            <Link to={`/workerchangepassword`}>
              <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                <Lock size={18} /> Change Password
              </li>
              <br />
            </Link>
            <Link to={`/Viewrequest`}>
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
            navigate("/Mainlogin");
          }}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Received Requests</h2>

        {filteredRequests.length === 0 ? (
          <p className="text-gray-600">No requests found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request, index) => {
              const emp = getempdata(request.employer._id);
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {emp ? emp.name : "Unknown Employer"}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Email:</span> {emp ? emp.email : "N/A"}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Phone:</span> {emp ? emp.phoneNumber || "8699708784" : "8699708784"}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Requested At:</span> {new Date(request.createdAt).toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewrequest;
