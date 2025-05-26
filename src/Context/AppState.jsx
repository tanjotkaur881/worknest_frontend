import React, { use, useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios'
import { toast,Bounce } from 'react-toastify';
const AppState = (props)=>{
    const url="https://worknest-backend-hpln.onrender.com/api"
    const data = 10;
    const[category,setCategory] = useState([]);
    const[token, setToken] = useState([]);
    const[isAuthenticated, setIsAuthenticated] = useState([]);
    const[Employerdata, setEmployerdata] = useState([]);
    const[Workerdata, setWorkerdata] = useState([]);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [jobs, setJobs] = useState([]);
    const [getalldata, setAlldata] = useState([]);
    const [allRequest, setAllRequest] = useState([]);
    const [allempdata, setAllempdata] = useState([]);


    useEffect(() =>{
      const Fetchalldata = async () =>{
          const api = await axios.get("https://worknest-backend-hpln.onrender.com/api/worker/alldata",{
              headers: {
                  "Content-Type" :"Application/json",
              },
              withCredentials:true,
          });
          console.log("all data",api.data);
          setAlldata(api.data);
      };
      Fetchalldata();     
  },[])

 useEffect(() =>{
      const Fetchallempdata = async () =>{
          const api = await axios.get("https://worknest-backend-hpln.onrender.com/api/employer/all",{
              headers: {
                  "Content-Type" :"Application/json",
              },
              withCredentials:true,
          });
          console.log("all data",api.data);
          setAllempdata(api.data);
      };
      Fetchallempdata();     
  },[])


 
    useEffect(() =>{
      const Fetchjobs = async () =>{
          const api = await axios.get("https://worknest-backend-hpln.onrender.com/api/category/Getallcategory ",{
              headers: {
                  "Content-Type" :"Application/json",
              },
              withCredentials:true,
          });
          console.log("category data",api.data);
          setJobs(api.data);
      };
      Fetchjobs();
      
  },[])



useEffect(() =>{
        const Fetchcategory = async () =>{
            const api = await axios.get("https://worknest-backend-hpln.onrender.com/api/category/Getallcategory ",{
                headers: {
                    "Content-Type" :"Application/json",
                },
                withCredentials:true,
            });
            //console.log("category data",api.data);
            setCategory(api.data);
        };
        Fetchcategory();
        employerProfile();
        
    },[])




    useEffect(()=>{
        let lstoken = localStorage.getItem("token");
        let role = localStorage.getItem("Role");
        // employerProfile()
        // workerProfile()
        if(lstoken){
            setToken(lstoken);
            setIsAuthenticated(true);
        }
        if (role==="Worker"){
          workerProfile()
          
        }
    }, []);


    const employerProfile = async () => {
        let ltoken = localStorage.getItem("token");
        console.log("token", ltoken)

        try {
            const response = await axios.get('https://worknest-backend-hpln.onrender.com/api/employer/employerprofile', {
                headers: {
                    "Content-Type": "application/json",
                    "Auth": ltoken, // Make sure `token` is defined in this scope
                },
                withCredentials: true,
            });
            console.log('employerprofile', response.data);
            setEmployerdata(response.data.user);
        } catch (error) {
            console.error('Error fetching employer profile:', error);
        }
    };
    
    const workerProfile = async () => {
        let ltoken = localStorage.getItem("token");
        console.log("token wordker", ltoken)

        try {
            const response = await axios.get('https://worknest-backend-hpln.onrender.com/api/worker/workerrprofile', {
                headers: {
                    "Content-Type": "application/json",
                    "Auth": ltoken, // Make sure `token` is defined in this scope
                },
                withCredentials: true,
            });
            console.log('workerprofile', response.data);
            setWorkerdata(response.data.worker);
        } catch (error) {
            console.error('Error fetching worker profile:', error);
        }
    };

const Employerregister = async (name, email, password) =>{
    const api = await axios.post("https://worknest-backend-hpln.onrender.com/api/employer/register", {name,email, password},
        {
        headers: {
        'Content-Type': 'Application/json',
        },
        withCredentials: true,
    })
    console.log("data ", api)
    toast('🦄 Successfully Registered!', {
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
}  

const Employerlogin = async (email, password) =>{
    const api = await axios.post("https://worknest-backend-hpln.onrender.com/api/employer/login", {email, password},
        {
        headers: {
        'Content-Type': 'Application/json',
        },
        withCredentials: true,
    })
    console.log("data ", api)
    

    setToken(api.data.token);
    setIsAuthenticated(true);
    console.log(api.data)
    localStorage.setItem("token",api.data.token);
    localStorage.setItem("Role","Emplyoer");
    return api.data;
};

const Workerregister = async ( name, email, phone, category, location, experience, image, password) =>{
    console.log("app stae", name, email, phone, category, location, experience, image, password)
    const api = await axios.post("http://localhost:3000/api/worker/register",
         { name, email, phone, category, location, experience, image, password},
        {
        headers: {
        'Content-Type': 'Application/json',
        },
        withCredentials: true,
    })
    console.log("datam ", api)
    return api

}  

const Workerlogin = async (email, password) =>{
    const api = await axios.post("https://worknest-backend-hpln.onrender.com/api/worker/workerlogin", {email, password},
        {
        headers: {
        'Content-Type': 'Application/json',
        },
        withCredentials: true,
    })
    console.log("data ", api)

    // toast('🦄 Successfully Login!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //     });
        setToken(api.data.token);
    setIsAuthenticated(true);
    console.log(api.data)
    localStorage.setItem("token",api.data.token);
    localStorage.setItem("Role","Worker");
    return api.data;
}  

const EmployerchangePassword = async (oldPassword, newPassword) => {
    try {
      const res = await axios.put('https://worknest-backend-hpln.onrender.com/api/employer/Employerchangepassword',
        { oldPassword, newPassword }, {
        
        headers: {
          'Content-Type': 'application/json',
          Auth: token, 
        },
        
      });

      
    console.log("res.data", res.data)
      return res.data
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const WorkerchangePassword = async (oldPassword, newPassword) => {
    console.log("oldPassword, newPassword", )
    try {
      console.log(oldPassword, newPassword)
      const res = await axios.put('https://worknest-backend-hpln.onrender.com/api/worker/Workerchangepassword',
        { oldPassword, newPassword }, {
        
        headers: {
          'Content-Type': 'application/json',
          Auth: token, 
        },
        
      });

      
    console.log("res.data", res.data)
      return res.data
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

const Workerlogout =()=>{
    setIsAuthenticated(false);
    setToken("");
        localStorage.removeItem("token");
        toast.success('🦄 Logout Successfully!', {
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
    
}

const Employerlogout =()=>{
    setIsAuthenticated(false);
    setToken("");
        localStorage.removeItem("token");
        toast.success('🦄 Logout Successfully!', {
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
    
}

const WorkerEditprofile = async (data) => {
  console.log("appstate", data)
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(
      "https://worknest-backend-hpln.onrender.com/api/worker/workereditprofile",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
      }
    );
    console.log("res",res.data)
    return res.data;
  } catch (err) {
    console.error("Error updating profile:", err);
    return { success: false, message: err.response?.data?.message || err.message };
  }
};

// const Contactus = async (name, phone, Yourmessage) => {
//   console.log("Creating contact with data:", name, phone, Yourmessage);
//   try {
//     const res = await axios.post(
//       "http://localhost:3000/api/contact/addcontact",
//       { name, phone, Yourmessage },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("Contact created:", res.data);
//     return res.data;
//   } catch (err) {
//     console.error("Error creating contact:", err);
//     return { success: false, message: err.response?.data?.message || err.message };
//   }
// };



const Contactus = async (name, phone, Yourmessage) =>{

  console.log("name, phone, Yourmessage", name, phone, Yourmessage)
  const api = await axios.post("https://worknest-backend-hpln.onrender.com/api/contact/addcontact", {name, phone, Yourmessage},
      {
      headers: {
      'Content-Type': 'Application/json',
      },
      withCredentials: true,
  })
  console.log("data ", api)
}  

const Review = async (name, rating, review) =>{

  console.log("name, rating, review", name, rating, review)
  const api = await axios.post("https://worknest-backend-hpln.onrender.com/api/review/createReview", {name, rating, review},
      {
      headers: {
      'Content-Type': 'Application/json',
      },
      withCredentials: true,
  })
  console.log("data ", api)
} 

const requestWorker = async (employerId, workerId) => {
    try {
      const response = await axios.post('https://worknest-backend-hpln.onrender.com/api/request/requestworker', {
        employer: employerId,
        worker: workerId,
      });
      return response.data;
    } catch (error) {
      console.error('Request Worker Error:', error);
      throw error;
    }
  };


useEffect(() => {
  const fetchRequest = async () => {
    try {
      const response = await axios.get("https://worknest-backend-hpln.onrender.com/api/request/getrequestworker", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("All data:", response.data);
      setAllRequest(response.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  fetchRequest();
}, []);


    return (
       <AppContext.Provider 
       value={{Review,allempdata,workerProfile, allRequest,requestWorker,data,Workerdata,Contactus,getalldata,Employerdata,WorkerEditprofile,  jobs ,Workerlogout,Employerlogout,WorkerchangePassword,EmployerchangePassword ,Employerregister,Employerlogin,Workerregister,Workerlogin,employerProfile,category,token,setIsAuthenticated}}>
        {props.children}
       </AppContext.Provider>
    )
}
export default AppState
