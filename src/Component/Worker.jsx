import React from 'react'
import Header from './Header'
import Workerr from './Workerr'
import ReviewsWorker from './ReviewsWorker'
import { Quote } from 'lucide-react';
import  { useState } from "react";
import Footer from './Footer';

const Worker = () => {
  return (
<>
 <Header/>
 
    <div className="bg-base-100 min-h-screen flex items-center justify-center p-6" style={{marginTop:'-40px'}}>
      <div className="max-w-7xl bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="md:w-1/2">
         
          <p className="text-sm text-gray-500">
            <span className="text-red-500 font-semibold">HOME</span> &gt; WORKER
          </p>

          
          <h1 className="text-4xl font-bold mt-2">Construction Jobs</h1>
          <h2 className="text-2xl text-primary font-semibold mt-1">
            A Gateway to a Better Life
          </h2>

          {/* Updated Description */}
          <p className="text-gray-600 mt-4 text-sm">
            Finding reliable construction jobs has never been easier with{" "}
            <span className="font-semibold">Digital Labour Chowk</span>, a
            dedicated construction workers hiring platform designed to connect
            skilled workers with the right opportunities. Whether you are a
            mason, carpenter, electrician, plumber, or any other construction
            professional, our platform ensures that you get access to real-time
            job listings that match your expertise.
          </p>

          <p className="text-gray-600 mt-4 text-sm">
            With a simple profile creation process, workers can showcase their
            skills, experience, and ratings to attract potential employers. The
            platform also ensures secure and timely payments, so you never have
            to worry about delayed wages. Additionally, we offer valuable
            support services such as resume building, interview preparation, and
            skill development programs to help workers grow in their careers.
          </p>

          <p className="text-gray-600 mt-4 text-sm">
            Beyond job opportunities, Digital Labour Chowk fosters a strong
            worker community, allowing construction professionals to connect,
            share experiences, and support each other. By using our construction
            workers hiring platform, workers can build a solid reputation, gain
            better job opportunities, and secure a stable income. Take control
            of your career today and step towards a brighter future with Digital
            Labour Chowk!
          </p>

          
          
        </div>

        
        <div className="md:w-1/1 flex justify-center ml-24 ">
          <img
            src="https://digitallabourchowk.com/wp-content/uploads/2025/02/Untitled-design-16.png"
            alt="Construction Workers"
            className="w-full max-w-md rounded-lg " style={{height:'320px', width:'100%', marginTop:'40px'}}
          />
        </div>
      </div>
    </div>
  

    
  
    


    <section className="p-10 bg-white text-center" style={{marginTop:'-60px'}}>
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Services on Demand</h2>
      <p className="mb-8 text-gray-600">
        Construction jobs are now easier to manage with Digital Labour Chowk, a reliable construction workers hiring platform that helps businesses find skilled labor quickly and efficiently.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {Workerr.map((i, index) => (
          <div
            key={index}
            className="card p-6 a1 title border-rounded-4xl shadow-md transition duration-300 hover:shadow-lg bg-white"
          >
            <div className="text-5xl">{i.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{i.title}</h3>
            <p className="text-sm mt-2">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  
    
   
    <section className="p-10 bg-white flex flex-col md:flex-row items-center gap-10">
      {/* Left - Image with pink shadow */}
      <div className="md:w-1/2 relative">
        <div className=""></div>
        <img
          src="https://digitallabourchowk.com/wp-content/uploads/2024/09/SM916619-1536x1024.jpg" style={{height:'300px', width:'450px', marginLeft:'90px', marginTop:'40px'}}
          alt="Construction Workers"
          className="relative rounded-2xl shadow-lg w-full dd"
        />
      </div>

      {/* Right - Text Content */}
      <div className="md:w-1/2 text-left">
        <h5 className="text-gray-500 font-bold uppercase tracking-widest">Priority</h5>
        <h2 className="text-3xl font-bold text-blue-700 mt-2">
          Change the Game in Construction Jobs
        </h2>
        <p className="text-gray-600 mt-4">
          Say goodbye to the old routine of waiting at labor chowks for work.
          Digital Labour Chowk, a trusted construction workers hiring platform,
          brings construction jobs right to your fingertips. Find opportunities
          based on your skills and location, access expert training resources,
          and secure better pay—without the need to migrate.
        </p>
      </div>
    </section>
  
    

    
<div className="container mx-auto px-4 py-10 text-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-6">What People Say About Us</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {ReviewsWorker.map((i, index) => (
      <div key={index} className="p-6 bg-gray-100 shadow-lg rounded-lg border border-gray-200">
        {/* Right-side facing quote icon */}
        <Quote className="w-12  h-12 text-blue-600 mx-auto mb-4 rotate-180" fill="currentColor"  style={{marginLeft:'-5px'}}/>
        <p className="text-gray-700 italic">{i.feedback}</p>
        <div className="flex items-center justify-center mt-4">
          <img src={i.image} alt={i.name} className="w-12 h-12 rounded-full mr-3" />
          <div>
            <h3 className="font-semibold text-blue-600">{i.name}</h3>
            <p className="text-gray-500">{i.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




    <section className="flex flex-col items-center text-center p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Solution</h2>

      {/* Description */}
      <p className="max-w-3xl text-gray-600 mb-6">
        The Worknest worker app empowers skilled laborers by
        providing a platform to showcase their expertise and connect with
        potential employers. Workers can create detailed profiles highlighting
        their skills, experience, and certifications. The app offers real-time
        job listings, allowing workers to find and apply for jobs that match
        their skill set. Additionally, it features a secure payment system,
        ensuring timely and fair compensation. Workers can also receive ratings
        and reviews from employers, helping them build a strong reputation. This
        app not only simplifies the job search process but also enhances
        security and career growth for workers.
      </p>

      {/* Video and Image */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        
        

        {/* Video Embed */}
        <div className="bg-blue-900 p-4 rounded-lg text-white  text-center" style={{width:'800px'}}>
          <p className="text-lg font-bold mb-2">
            पाए मनचाही नौकरी अपने हुनर के अनुसार
          </p>
          <div className="w-full">
            <iframe
              
              src="https://www.youtube.com/embed/F9gS6AK2jhU?si=_MML_eXP0YlKj2Jx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            style={{height:'350px', width:'100%',}} ></iframe>
          </div>
          <button className="btn btn-warning mt-4">अभी अप्लाई करें</button>
        </div>
      </div>

      
    </section>
  
    
    <section className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 mr-3">
          Time to Make Construction Jobs Better
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          In a world full of opportunities, it’s time to build a brighter future in the
          construction industry. Digital Labour Chowk, a leading construction workers
          hiring platform, empowers daily wage workers by connecting them with the right
          construction jobs based on their skills. Join us in creating a strong network
          where workers and employers come together to transform the industry. Let’s
          build success—together!
        </p>
       
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 space-x-4">
        <img
          src="https://digitallabourchowk.com/wp-content/uploads/2024/09/SM145905-1024x1536.jpg"
          alt="Worker 1"
          className="w-1/2 rounded-xl  shadow-md" style={{height:'460px', width:'300px'}}
        />
        <img
          src="https://digitallabourchowk.com/wp-content/uploads/2024/09/SS654383-1024x1536.jpg"
          alt="Worker 2"
          className="w-1/2 rounded-xl shadow-md"
          style={{height:'460px', width:'300px', marginTop:'40px'}}
        />
      </div>
    </section>
  
  
    <section className="py-12 bg-white flex justify-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-7xl">
        {/* Business Card */}
        <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml--4" style={{height:'400px', width:'550px'}}>
          <h2 className="text-3xl font-bold">Hire the best talent</h2>
          <p className="mt-3 text-gray-200 text-lg">
            "Streamline your hiring process and find top talent effortlessly! Download Worknest now!"
          </p>
          <div className="mt-6 text-4xl font-bold">100,000+</div>
          <p className="text-gray-300 text-lg">Worker network</p>
          <div className="mt-2 text-4xl font-bold">10+</div>
          <p className="text-gray-300 text-lg">Worker skills</p>
          
        </div>

        {/* Worker Card */}
        <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml-10" style={{height:'400px', width:'550px'}}>
          <h2 className="text-3xl font-bold">Find your next job</h2>
          <p className="mt-3 text-gray-200 text-lg">
            "Unlock endless job opportunities and secure your future with just one click! Download Worknest now!"
          </p>
          <div className="mt-6 text-4xl font-bold">3,000+</div>
          <p className="text-gray-300 text-lg">Employers for you</p>
          <div className="mt-2 text-4xl font-bold">1,000+</div>
          <p className="text-gray-300 text-lg">Monthly job openings</p>
          
        </div>
      </div>

   
    </section>
  
  <img  src="https://digitallabourchowk.com/wp-content/uploads/2024/09/footer-img.svg" alt="" style={{marginTop:"-3px"}} />
  
  <Footer/>
  
</>
  )
}

export default Worker