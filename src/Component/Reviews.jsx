import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';
import { toast,Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  KeyRound,
  Briefcase,
  FilePlus2,
  Star,
  LogOut,
} from "lucide-react";

const Reviews = () => {
  const { Employerlogout } = useContext(AppContext);
  const navigate = useNavigate();
  const [nm, setNm] = useState("");
  const [rt, setRt] = useState("");
  const [re, setRe] = useState("");

  const { Review } = useContext(AppContext); // Renamed function to avoid conflict

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Start function");
    console.log({ nm, rt, re });

    try {
      const response = await Review(nm, rt, re);
      console.log("Review Submitted successfully", response);
      toast('🦄Review Submitted successfully !', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

      setNm("");
      setRt("");
      setRe("");
    } catch (error) {
      console.error("Review error", error);
    }
  };

  return (
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

      {/* Review Form Content */}
      <div className="flex-1 bg-base-200 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary">Write a Review</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
                value={nm}
                onChange={(e) => setNm(e.target.value)}
              />
            </div>

            <div>
              <label className="label font-semibold">Rating</label>
              <select
                className="select select-bordered w-full"
                value={rt}
                onChange={(e) => setRt(e.target.value)}
                required
              >
                <option value="">Select Rating</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Poor</option>
                <option value="1">⭐ Terrible</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold">Your Review</label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write your experience..."
                required
                value={re}
                onChange={(e) => setRe(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-8">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
