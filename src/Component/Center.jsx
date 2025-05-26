import React from 'react'
import { Briefcase, UserPlus, Search } from "lucide-react";
import { Eye, Target } from "lucide-react";
import Static2 from './Static2';
import Footer from './Footer';
import { Link } from "react-router-dom";

const Center = () => {
  return (
   <>
   <div>
      <img src="https://www.psalegal.com/wp-content/uploads/2021/10/Labour-and-Employment.jpg" alt="" style={{height:"650px"}} />
    </div>
    
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-12 space-y-16">

{/* Hero Section */}
<section className="text-center space-y-4">
  <h1 className="text-4xl font-bold leading-tight">
    Empowering India's Workforce, One Job at a Time
  </h1>
  <p className="text-lg max-w-3xl mx-auto">
    We connect blue-collar workers with real opportunities in construction, delivery, and more. No middlemen. No delays. Just work that matters.
  </p>
</section>

{/* How It Works */}
<section className="max-w-5xl mx-auto space-y-8">
  <h2 className="text-3xl font-bold text-center">How It Works</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Step 1 */}
    <div className="bg-blue-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all">
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <UserPlus className="text-blue-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Register Easily</h3>
      <p className="text-sm">
        Quick signup with just your mail id. No complex forms. Workers and employers can both register in minutes.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-yellow-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all">
      <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Search className="text-yellow-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Find Jobs</h3>
      <p className="text-sm">
        Browse local job opportunities in your area. Verified job posts make finding daily or long-term work fast and easy.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-green-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Briefcase className="text-green-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Hire & Work</h3>
      <p className="text-sm">
        Employers connect directly with workers. No hidden charges. Workers receive fair pay and employers get dependable labor.
      </p>
    </div>
  </div>
</section>

{/* Mission Statement */}
<section className="max-w-4xl mx-auto text-center space-y-4">
  <h2 className="text-2xl font-bold">Our Mission</h2>
  <p>
    We believe every worker deserves respect, opportunity, and timely payment. Our platform brings transparency to the labor market and helps businesses grow with reliable hands.
  </p>
</section>

{/* Call to Action */}
<section className="text-center space-y-4">
  <h2 className="text-2xl font-bold">Start Your Journey Today</h2>
  <p className="text-sm text-gray-500">Register now and be part of India’s growing worker-first network.</p>
  <br/><br/>
  <Link
  to="/Mainlogin"
  className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"

>
  Register
</Link>
</section>
</div>
    

<div
      className="hero min-h-[300px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url("https://samadhan.labour.gov.in/uploadedfiles/62f5ab5686b3d3910918d31b696073d7doc_201_FrontSilder.jpg")`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">
            Our Aim: To maintain industrial peace, ensure healthy relations between employers and employees.
          </h1>
          <p className="text-lg">
            To provide effective enforcement of provisions of various labor laws to prevent exploitation of workers.
          </p>
        </div>
      </div>
    </div>
  

    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-4 md:px-10 bg-white">
  {/* Vision Card */}
  <div className="relative">
    <div className="absolute -inset-1 rounded-2xl bg-gray-200 opacity-30 blur-lg z-0"></div>
    <div className="relative z-10 w-80 md:w-96 bg-[#F7FBFF] rounded-2xl border border-gray-200 p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h2 className="text-blue-700 text-xl font-semibold mb-2">OUR VISION</h2>
        <p className="text-sm text-gray-600">
          To create an ecosystem where daily wage earners, especially in the construction sector, have consistent job access, while businesses benefit from a reliable, verified workforce.
        </p>
      </div>
    </div>
  </div>

  {/* Mission Card */}
  <div className="relative">
    <div className="absolute -inset-1 rounded-2xl bg-gray-200 opacity-30 blur-lg z-0"></div>
    <div className="relative z-10 w-80 md:w-96 bg-[#F7FBFF] rounded-2xl border border-gray-200 p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 4a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        </div>
        <h2 className="text-blue-700 text-xl font-semibold mb-2">OUR MISSION</h2>
        <p className="text-sm text-gray-600">
          To empower blue-collar workers by providing seamless access to job opportunities and supporting employers in finding skilled labor quickly and efficiently.
        </p>
      </div>
    </div>
  </div>
</div>


    <Static2/>

    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center bg-pink-600 py-3">
        <h2 className="text-white font-bold text-xl md:text-2xl">
          Building a Better Future for Workers and Companies
        </h2>
      </div>

      {/* FAQ Title */}
      <div className="text-center my-8">
        <h3 className="text-2xl font-bold text-blue-700">Frequently Asked Questions</h3>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto bg-blue-50 rounded-box shadow-lg">
        <div className="join join-vertical w-full">

          {/* FAQ 1 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-base font-medium">
              What is Worknest?
            </div>
            <div className="collapse-content">
              <p>Worknest is a platform designed to connect skilled daily wage workers with job opportunities from contractors and companies.</p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-base font-medium">
              How can contractors or companies hire workers through the platform?
            </div>
            <div className="collapse-content">
              <p>Contractors and companies can register, post job requirements, and connect with verified workers based on skill, location, and availability.</p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-base font-medium">
              What kind of workers are available on Worknest?
            </div>
            <div className="collapse-content">
              <p>The platform offers access to a wide range of blue-collar professionals like masons, electricians, plumbers, carpenters, and general laborers.</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-base font-medium">
              Is there a fee for workers or companies to use the platform?
            </div>
            <div className="collapse-content">
              <p>No, the platform is free to use for both workers and employers to register and interact.</p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-base font-medium">
              How does Worknest ensure the quality and authenticity of workers?
            </div>
            <div className="collapse-content">
              <p>All workers go through a verification process, and employers can also review and rate workers to maintain trust and quality standards.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <section className="py-12 bg-white flex justify-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-7xl">
        {/* Business Card */}
        <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml--4">
          <h2 className="text-3xl font-bold">Hire the best talent</h2>
          <p className="mt-3 text-gray-200 text-lg">
            "Streamline your hiring process and find top talent effortlessly! Download Digital Labour Chowk today!"
          </p>
          <div className="mt-6 text-4xl font-bold">100,000+</div>
          <p className="text-gray-300 text-lg">Worker network</p>
          <div className="mt-2 text-4xl font-bold">10+</div>
          <p className="text-gray-300 text-lg">Worker skills</p>
          
        </div>

        {/* Worker Card */}
        <div className="bg-blue-700 text-white p-10 rounded-3xl shadow-xl w-full md:w-[620px] ml-10">
          <h2 className="text-3xl font-bold">Find your next job</h2>
          <p className="mt-3 text-gray-200 text-lg">
            "Unlock endless job opportunities and secure your future with just one click! Download Digital Labour Chowk now!"
          </p>
          <div className="mt-6 text-4xl font-bold">3,000+</div>
          <p className="text-gray-300 text-lg">Employers for you</p>
          <div className="mt-2 text-4xl font-bold">1,000+</div>
          <p className="text-gray-300 text-lg">Monthly job openings</p>
          
        </div>
      </div>

   
    </section>
    <img  src="https://digitallabourchowk.com/wp-content/uploads/2024/09/footer-img.svg" alt="" style={{marginTop:"-3px"}} />
  
  


   </>
  )
}

export default Center
