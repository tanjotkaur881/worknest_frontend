import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import axios from 'axios';
import {
  LayoutDashboard, User, Pencil, Lock, Eye, Star, LogOut,
  Mail, Phone, MapPin, Briefcase, Calendar, Clock, Heart, Code
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link

 } from 'react-router-dom';
// Input Component
const InputField = ({ icon, label, name, value, onChange }) => (
  <div className="flex items-center gap-3 bg-white shadow rounded-xl p-4 border">
    <div className="text-[#3FBAA0]">{icon}</div>
    <div className="w-full">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
      />
    </div>
  </div>
);

// TextArea Component
const TextAreaField = ({ icon, label, name, value, onChange }) => (
  <div className="flex items-start gap-3 bg-white shadow rounded-xl p-4 border">
    <div className="text-[#3FBAA0] mt-1">{icon}</div>
    <div className="w-full">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
        rows={3}
      />
    </div>
  </div>
);

const WorkerEditProfile = () => {
  const { Workerlogout, Workerdata, WorkerEditprofile } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", category: "", location: "",
    experience: "", image: "", availability: "", hobbies: "",
    skills: "", bio: ""
  });

  const token = localStorage.getItem("workertoken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/worker/workerrprofile", {
          headers: { Authorization:`Bearer ${token}`}
        });

        const data = res.data;
        setFormData({
          name: data.name || "", email: data.email || "", phone: data.phone || "",
          category: data.category || "", location: data.location || "", experience: data.experience || "",
          image: data.image || "", availability: data.availability || "", hobbies: data.hobbies || "",
          skills: data.skills || "", bio: data.bio || ""
        });
      } catch (err) {
        console.error("Error loading profile", err);
      }
    };

    fetchProfile();
  }, [token]);

  useEffect(() => {
    if (Workerdata) {
      setFormData({
        name: Workerdata.name || "", email: Workerdata.email || "", phone: Workerdata.phone || "",
        category: Workerdata.category || "", location: Workerdata.location || "", experience: Workerdata.experience || "",
        image: Workerdata.image || "", availability: Workerdata.availability || "", hobbies: Workerdata.hobbies || "",
        skills: Workerdata.skills || "", bio: Workerdata.bio || ""
      });
    }
  }, [Workerdata]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await WorkerEditprofile(formData);
      toast.success("Profile updated successfully!", {
        position: "top-right", autoClose: 5000, transition: Bounce
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile", {
        position: "top-right", autoClose: 5000
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-600 to-green-400 text-white p-4 flex flex-col justify-between" style={{ width: '350px' }}>
        <div>
          <div className="text-2xl font-bold mb-6">
            <span className="text-yellow-300">WORKNEST</span>
            <p className="text-xs text-white/80">Go Smarter, Not Harder</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded "><LayoutDashboard size={18} /> Worker Dashboard</li> 
            <br />
         <Link to={`/workerProfile`}>   <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded "><User size={18} /> My Profile</li> </Link>
         <br />
        <Link to={`/workerEditprofile`}>    <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded  "><Pencil size={18} /> Edit Profile</li></Link>
       <br />
        <Link to={`/workerchangepassword`}>    <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded "><Lock size={18} /> Change Password</li> </Link>
           <br />
            <Link to={`/Viewrequest`}>
                         <li className="flex items-center gap-2 hover:bg-white/10 p-2 rounded cursor-pointer">
                           <Eye size={18} /> View Request
                         </li>
                       </Link>
          </ul>
        </div>
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
      <div className="w-full p-6 overflow-y-auto bg-gradient-to-br from-gray-100 to-white" style={{ backgroundColor: 'rgb(132, 183, 199)' }}>
        <div className="rounded-3xl shadow-xl p-8 border border-gray-200 max-w-6xl mx-auto mt-10 bg-white">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800">Edit Worker Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="space-y-4">
                <InputField icon={<User size={18} />} label="Name" name="name" value={formData.name} onChange={handleChange} />
                <InputField icon={<Briefcase size={18} />} label="Category" name="category" value={formData.category} onChange={handleChange} />
              </div>

              <div className="flex justify-center">
              <img
                src="https://image.shutterstock.com/image-photo/professional-mechanical-engineer-team-working-260nw-1721715541.jpg"
                alt="Employer"
                className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-blue-300"
              />
            </div>

              <div className="space-y-4">
                <InputField icon={<Phone size={18} />} label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                <InputField icon={<Calendar size={18} />} label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField icon={<Mail size={18} />} label="Email" name="email" value={formData.email} onChange={handleChange} />
              <InputField icon={<MapPin size={18} />} label="Location" name="location" value={formData.location} onChange={handleChange} />
              <InputField icon={<Clock size={18} />} label="Availability" name="availability" value={formData.availability} onChange={handleChange} />
              <InputField icon={<Heart size={18} />} label="Hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextAreaField icon={<Code size={18} />} label="Skills" name="skills" value={formData.skills} onChange={handleChange} />
              <TextAreaField icon={<User size={18} />} label="Bio" name="bio" value={formData.bio} onChange={handleChange} />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkerEditProfile;