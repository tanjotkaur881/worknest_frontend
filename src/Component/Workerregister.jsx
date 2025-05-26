import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import Header from './Header'

const Workerregister = () => {

  const[nm, setNm]= useState("")
  const[em, setEm]= useState("")
  const[pw, setPw]= useState("")
  const[cpw, setCpw]= useState("")
  const[ph, setPh]= useState("")
  const[cg, setCg]= useState("")
  const[lc, setLc]= useState("")
  const[ex, setEx]= useState("")
  const[im, setIm]= useState("")


  const { Workerregister,category } = useContext(AppContext);
const f1 = (a) =>{
  console.log(" Start function ");
  a.preventDefault();
  console.log("JSX PAGE",{nm, em,ph,cg,lc,ex,im,pw})

  Workerregister(nm, em,ph,cg,lc,ex,im,pw)
  .then((response)=>{
    console.log("Worker registered successfully", response);

    setNm("");
    setEm("");
    setPw("");
    setCpw("");
    setPh("");
    setCg("");
    setLc("");
    setEx("");
    setIm("");
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
  
    
    <div className="relative z-10 card w-100 bg-base-100 shadow-xl bg-opacity-90 backdrop-blur-md">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Worker Register</h2>
  
        <form onSubmit={f1} >

        <div className="grid grid-cols-2 gap-4">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
            value={nm}  onChange={(e)=>setNm(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="form-control">
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
  </div>
          

<div className="grid grid-cols-2 gap-4 pt-5">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input
      value={pw}
      onChange={(e) => setPw(e.target.value)}
      type="password"
      placeholder="Enter your password"
      className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Confirm Password</span>
    </label>
    <input
      type="password"
      value={cpw}
      onChange={(e) => setCpw(e.target.value)}
      placeholder="Confirm your password"
      className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

<div className="grid grid-cols-2 gap-4 pt-5">
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
            value={ph}  onChange={(e)=>setPh(e.target.value)}
              type="number"
              placeholder="Enter your Mobile no"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-control">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <select value={cg}
  onChange={(e) => setCg(e.target.value)} className="select select-bordered border-gray-300 focus:ring-2 focus:ring-blue-500">
    <option value="" >Select a category</option>
    {category?.map((i) => (
      <option key={i._id} value={i._id}>
        {i.name}
      </option>
    ))}
  </select>
</div>

            {/* <input
            value={cg}  onChange={(e)=>setCg(e.target.value)}
              type="text"
              placeholder="Enter the category"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          </div>

          <div className="grid grid-cols-2 gap-4 pt-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
            value={lc}  onChange={(e)=>setLc(e.target.value)}
              type="text"
              placeholder="Enter the category"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <input
            value={ex}  onChange={(e)=>setEx(e.target.value)}
              type="number"
              placeholder="Enter the Experience "
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div> 
</div>

          <div className="form-control mt-5 text-center">
            <label className="label">
              <span className="label-text mr-3">Image</span>
            </label>
            <input
            value={im}  onChange={(e)=>setIm(e.target.value)}
              type="text"
              placeholder="Enter the Image"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          

          <div className="form-control mt-4 ">
            <button type="submit" className="btn btn-success">Register</button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
                Already have account?{" "}
                <a href='/Workerlogin' className="text-green-500 hover:underline">
                  Login
                </a>
              </p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Workerregister