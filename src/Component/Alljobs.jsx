import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { Link, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    User,
    KeyRound,
    Briefcase,
    FilePlus2,
    Star,
    LogOut,
  } from "lucide-react";

const Alljobs = () => {
  const { Employerlogout } = useContext(AppContext);
  const navigate = useNavigate();
    const { jobs } = useContext(AppContext);
    console.log("jobs",jobs)
  return (
    <>
<div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-green-400 text-white p-4 flex flex-col justify-between">
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
          <Link to={`/Employerchangepassword`}>  <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
              <KeyRound size={18} /> Edit Password
            </li></Link>
          <br />
           <Link to={`/Alljobs`}> <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
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
  <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
    <h1 className="text-3xl font-semibold mb-6 text-center " style={{color:'#2564E9'}}>Available Jobs</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs?.map((i) => {
        let imageUrl;

        // Simple logic to assign an image based on job title
        if (i.name.toLowerCase().includes("developer") || i.name.toLowerCase().includes("engineer")) {
          imageUrl = "https://via.placeholder.com/300x180.png?text=Developer+Job";
        } else if (i.name.toLowerCase().includes("designer")) {
          imageUrl = "https://via.placeholder.com/300x180.png?text=Designer+Job";
        } else if (i.name.toLowerCase().includes("marketing")) {
          imageUrl = "https://via.placeholder.com/300x180.png?text=Marketing+Job";
        } else {
          imageUrl = "https://via.placeholder.com/300x180.png?text=Job+Opportunity";
        }

        return (
          <div key={i._id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
  <img src={i.img} alt={i.name} className="w-full h-60 object-cover" />
  <div className="p-4 flex items-center justify-between">
    <h2 className="text-lg font-semibold">{i.name}</h2>
    <Link to={`/Findbysearch/${i._id}`}>
    <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-sm font-medium py-2 px-4 rounded shadow">
  View Workers
</button>
</Link>
  </div>
</div>

        
        );
      })}
    </div>
  </div>
</div>

    </>
  )
}

export default Alljobs