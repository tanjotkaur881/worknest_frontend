import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import Header from './Header'

const Employerregister = () => {
  
 
  const[nm, setNm]= useState("")
  const[em, setEm]= useState("")
  const[pw, setPw]= useState("")
  const[cpw, setCpw]= useState("")
  

const { Employerregister } = useContext(AppContext);
const f1 = (a) =>{
  console.log(" Start function ");
  a.preventDefault();
  console.log({nm, em, pw})

  Employerregister(nm, em, pw)
  .then((response)=>{
    console.log("User registered successfully", response);
    setNm("");
    setEm("");
    setPw("");
    setCpw("");
  })
  .catch((error) =>{
    console.error("Registration error", error);
  })
}

  return (
<>
<Header/>

    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">


    
    <div 
      className="absolute inset-0 bg-cover bg-center filter blur-md"
      style={{ backgroundImage: `url("https://www.psalegal.com/wp-content/uploads/2021/10/Labour-and-Employment.jpg")` }}
    ></div>
  
    
    <div className="relative z-10 card w-96 bg-base-100 shadow-xl bg-opacity-90 backdrop-blur-md">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Employer Register</h2>
  
        <form onSubmit={f1}>
          <div className="form-control" >
            <label className="label">
              <span className="label-text ">First Name</span>
            </label>
            <input
             value={nm}  onChange={(e)=>setNm(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="form-control" >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
             value={em}  onChange={(e)=>setEm(e.target.value)}
              type="email"
            
              placeholder="Enter your email"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="form-control" >
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
             value={pw}  onChange={(e)=>setPw(e.target.value)}
              type="password"
              
              placeholder="Enter your password"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="form-control" >
            <label className="label">
              <span className="label-text ">Confirm Password</span>
            </label>
            <input
              value={cpw}  onChange={(e)=>setCpw(e.target.value)}
              type="password"
              
              placeholder="Confirm your password"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="form-control mt-4" >
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
                Already have account?{" "}
                <a href='/Employerlogin' className="text-blue-700 hover:underline">
                  Login 
                </a>
              </p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Employerregister