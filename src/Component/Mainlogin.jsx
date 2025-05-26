import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import AppContext from '../Context/AppContext'

const Mainlogin = () => {
  const {data} = useContext(AppContext)
  
  return (
    <>
    <Header />

    
    <div className="min-h-screen bg-gray-100">
      
      
      <div className="w-full  py-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600   inline-block px-6">
          Connecting Labor & Employers
        </h1>
      </div>

      
      <div className="flex justify-center items-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          
          <div className="card bg-base-100 w-[28rem] shadow-lg border border-gray-300">
            <figure className="px-10 pt-6">
              <img
                src="https://www.shutterstock.com/image-photo/two-diverse-business-executive-partners-600nw-2021639234.jpg"
                alt="Employer"
                className="rounded-xl w-64 h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-blue-600 text-2xl">Employer Login</h2>
              <p className="text-gray-600 text-lg">
                Employers can manage job postings, track applications, and communicate with workers.
              </p>
              <div className="card-actions mt-3">
              <a href='/Employerlogin' className="btn btn-primary px-6 py-3 text-lg"> Login as Employer </a>
              </div>
             
              <p className="mt-4 text-gray-600">
                Don't have an account?{" "}
                <a href="/Employerregister" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          
          <div className="card bg-base-100 w-[28rem] shadow-lg border border-gray-300">
            <figure className="px-10 pt-6">
              <img
                src="https://images.ctfassets.net/pdf29us7flmy/6A9oEYkOzhzvrcTGlvPd12/c77bbd0b72fb009ac7bfab3887d1d168/GettyImages-1049403640-SIZED.jpg?w=720&q=100&fm=jpg"
                alt="Worker"
                className="rounded-xl w-64 h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-green-600 text-2xl">Worker Login</h2>
              <p className="text-gray-600 text-lg">
                Workers can search for jobs, apply to listings, and manage their work profiles.
              </p>
              <div className="card-actions mt-3">
              <a href='/Workerlogin' className="btn btn-success px-6 py-3 text-lg"> Login as Worker </a>
              </div>
              
              <p className="mt-4 text-gray-600">
                Don't have an account?{" "}
                <a href='/Workerregister' className="text-green-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
 

    <Footer/>
    
    
    </>
  )
}

export default Mainlogin
