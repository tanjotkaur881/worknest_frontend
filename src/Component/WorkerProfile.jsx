import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  Pencil,
  Lock,
  Eye,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Clock,
  Heart,
  Code,
} from 'lucide-react';

const DetailCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 border border-gray-100">
    <div className="text-[#3FBAA0]">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-700">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

const WorkerProfile = () => {
  const { Workerdata, workerProfile, Workerlogout } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("Role");
    if (role === "Worker") {
      workerProfile();
    }
  }, []);

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
      <div className="w-full bg-gradient-to-br from-gray-100 to-white p-6 overflow-y-auto" style={{ backgroundColor: 'rgb(132, 183, 199)', marginTop: '-2px' }}>
        <div className="rounded-3xl shadow-2xl p-8 border border-gray-200 max-w-6xl mx-auto" style={{ marginTop: '40px' }}>
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#1E40AF' }}>
            Worker Profile
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Info */}
            <div className="space-y-4">
              <DetailCard icon={<User size={18} />} label="Name" value={Workerdata?.name} />
              <DetailCard icon={<Mail size={18} />} label="Email" value={Workerdata?.email} />
              <DetailCard icon={<Phone size={18} />} label="Phone" value={Workerdata?.phone} />
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src="https://image.shutterstock.com/image-photo/professional-mechanical-engineer-team-working-260nw-1721715541.jpg"
                alt="Worker"
                className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-blue-300"
              />
            </div>

            {/* Right Info */}
            <div className="space-y-4">
              <DetailCard icon={<Briefcase size={18} />} label="Category" value={Workerdata?.category} />
              <DetailCard icon={<MapPin size={18} />} label="Location" value={Workerdata?.location} />
              <DetailCard icon={<Calendar size={18} />} label="Experience" value={Workerdata?.experience} />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailCard icon={<Clock size={18} />} label="Availability" value={Workerdata?.availability} />
            <DetailCard icon={<Heart size={18} />} label="Hobbies" value={Workerdata?.hobbies || "N/A"} />
            <DetailCard icon={<Code size={18} />} label="Skills" value={Workerdata?.skills || "N/A"} />
            <DetailCard icon={<User size={18} />} label="Bio" value={Workerdata?.bio || "No bio available"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
