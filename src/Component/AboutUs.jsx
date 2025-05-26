import React from 'react'
import Header from './Header'
import Static from './Static'
import Testimonials from './Testimonials'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import ContactUsPage from './ContactUsPage'
const AboutUs = () => {
  return (
    <>

    <Header/>
    <div className="flex justify-center min-h-screen  p-20  " style={{marginLeft:'60px', marginRight:'60px'}}>
      <div className="container mx-auto bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center bg-base-200" style={{borderRadius:'50px'}}>
        
        <div className="md:w-1/2 text-center md:text-left">
          <nav className="text-sm text-gray-500 mb-4">
            <span className="text-pink-500 font-semibold" > <a href='/'> HOME </a></span> &gt; ABOUT US
          </nav>
          <h1 className="text-4xl font-bold text-blue-700">About Digital Labour Chowk</h1>
          <p className="mt-4 text-gray-600">
            Welcome to Digital Labour Chowk, India’s 1st job platform for blue-collar workers in the construction 
            industry. We revolutionize the hiring process by connecting businesses with skilled blue-collar workers 
            and professionals through our innovative platform.
          </p>
          <Link to={`/ContactUsPage`}><button className="btn btn-primary mt-4">Contact Us</button></Link>
        </div>

        
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1456699734/photo/the-engineer-talks-to-the-contractor-to-supervise-and-plan-the-work.jpg?s=612x612&w=0&k=20&c=DCdd8ZpB6A2y6u4mHtvVO9XOfkpS-TqwFaJKq_4Eos4="
            alt="Construction Worker"
            className="rounded-lg shadow-md w-full max-w-xl "
          />
        </div>
      </div>
    </div>
    
    <div className="flex p-4">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center bg-base-200">
       
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700">From vision to reality</h1>
          <p className="mt-4 text-gray-600">
            Digital Labour Chowk, a first job platform for blue-collar workers, started in 2020 with a vision 
            to transform the hiring landscape for the construction industry. Our founder, Chandrashekhar Mandal, 
            recognized the challenges that both businesses and job seekers face—employers struggle to find skilled, 
            reliable workers, while job seekers find it difficult to secure stable opportunities.
          </p>
          <p className="mt-4 text-gray-600">
            With a mission to bridge this gap, we built a user-friendly job platform that directly connects 
            companies with skilled workers, ensuring transparency, timely payments, and equal opportunities for all. 
            Our focus is on empowering blue-collar workers, simplifying the hiring process, and bringing stability 
            to thousands of families across India.
          </p>
          <p className="mt-4 text-gray-600">
            From idea to execution, our journey has been driven by a commitment to innovation, social impact, and 
            a belief that every worker deserves a fair chance. Today, Digital Labour Chowk is more than just a 
            platform; it's a community that helps workers and businesses grow together.
          </p>
        </div>

        
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/679524390/photo/construction-workers.jpg?s=612x612&w=0&k=20&c=LzXulgAuawckcj8QEWbmo_KodFrucJF56usW9UZZmJg="
            alt="Team at Work"
            className="rounded-lg shadow-md w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  
<Static/>






    <div className="bg-base-100 py-12 px-6 md:px-12 ">
      <div className="container mx-auto text-center">
        
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Building a Better Future for Workers and Companies
        </h2>

        
        <div className="bg-base-200 p-8 rounded-lg shadow-md mt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <h3 className="text-lg font-bold text-blue-700">OUR MISSION</h3>
      <p className="text-gray-700 mt-2">
        To empower blue-collar workers by providing seamless access to job 
        opportunities and supporting employers in finding skilled labor 
        quickly and efficiently.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-bold text-blue-700">OUR VISION</h3>
      <p className="text-gray-700 mt-2">
        To create an ecosystem where daily wage earners, especially in the 
        construction sector, have consistent job access, while businesses 
        benefit from a reliable, verified workforce.
      </p>
    </div>
  </div>
</div>

        
        <h3 className="text-2xl font-bold text-primary mt-12">Our Values</h3>

        
        <div className="flex justify-center gap-12 mt-6">
          <div className="text-center w-3/12">
            <span className="text-7xl">💡</span>
            <p className="text-lg font-semibold text-gray-700 mt-2">Innovation</p>
          </div>

          <div className="text-center w-3/12">
            <span className="text-7xl">🏅</span>
            <p className="text-lg font-semibold text-gray-700 mt-2">Excellence</p>
          </div>

          <div className="text-center w-3/12">
            <span className="text-7xl">🤝</span>
            <p className="text-lg font-semibold text-gray-700 mt-2">Collaboration</p>
          </div>

          <div className="text-center w-3/12">
            <span className="text-7xl">👥</span>
            <p className="text-lg font-semibold text-gray-700 mt-2 ">Community</p>
          </div>
        </div>
      </div>
    </div>
 
<Testimonials/>

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
  
  <Footer/>

    </>
  )
}

export default AboutUs