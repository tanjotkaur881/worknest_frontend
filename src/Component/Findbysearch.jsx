import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import { toast,Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  KeyRound,
  Briefcase,
  FilePlus2,
  Star,
  LogOut,
} from 'lucide-react';

const Findbysearch = () => {
  const { cat } = useParams();
  const { getalldata, requestWorker, Employerdata } = useContext(AppContext);
  console.log("Employerdata", Employerdata)
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    if (Array.isArray(getalldata) && getalldata.length > 0 && cat) {
      const filtered = getalldata.filter((item) => {
        return item.category?.toString() === cat.toString();
      });
      setFilterData(filtered);
    }
  }, [getalldata, cat]);

  const handleRequest = async (workerId) => {
    const employerId = Employerdata?._id;
    console.log("employerId:- ", employerId)
    console.log("workerId:- ", workerId)
    if (!employerId || !workerId) return alert("Missing employer or worker ID");

    try {
      const result = await requestWorker(employerId, workerId);
      toast('🦄 Request Sent Successfully! ', {
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
      console.log('Request successful:', result);
    } catch (error) {
      alert('Failed to send request.');
      console.error('Request failed:', error);
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
           <button className="bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-blue-800">
             <LogOut size={18} /> Logout
           </button>
         </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-700">
          Available Jobs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filterdata.map((i) => {
            let imageUrl;
            if (
              i.name?.toLowerCase().includes('developer') ||
              i.name?.toLowerCase().includes('engineer')
            ) {
              imageUrl = 'https://via.placeholder.com/300x180.png?text=Developer+Job';
            } else if (i.name?.toLowerCase().includes('designer')) {
              imageUrl = 'https://via.placeholder.com/300x180.png?text=Designer+Job';
            } else if (i.name?.toLowerCase().includes('marketing')) {
              imageUrl = 'https://via.placeholder.com/300x180.png?text=Marketing+Job';
            } else {
              imageUrl = 'https://via.placeholder.com/300x180.png?text=Job+Opportunity';
            }

            return (
              <div key={i._id} className="card lg:card-side bg-white shadow-xl">
                <figure className="w-1/2">
                  <img
                    src={i.image || imageUrl}
                    alt={i.name}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">{i.name}</h2>
                  <p><strong>Email:</strong> {i.email}</p>
                  <p><strong>Phone:</strong> {i.phone}</p>
                  {/* <p><strong>Category:</strong> {i.category?.name || 'N/A'}</p> */}
                  <p><strong>Location:</strong> {i.location || 'N/A'}</p>
                  <p><strong>Experience:</strong> {i.experience || 'N/A'}</p>
                  <p><strong>Availability:</strong> {i.availability ? 'Available' : 'Not Available'}</p>
                  <p><strong>Rating:</strong> {i.rating ? `${i.rating} ⭐` : 'No rating yet'}</p>
                  <div className="card-actions justify-end mt-auto">
                    <button
                      onClick={() => handleRequest(i._id)}
                      className="btn btn-primary"
                    >
                      Request to join
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Findbysearch;
