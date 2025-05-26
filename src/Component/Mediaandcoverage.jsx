import React from 'react'
import Header from './Header'
import News from './News'
import Footer from './Footer'
const Mediaandcoverage = () => {
  return (
    <>
    <Header/>
    <div className=" bg-gray-100 p-10 " style={{height:'490px', width:'80%', marginLeft:'150px', marginTop:'50px', borderRadius:'2%'}}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          {/* Breadcrumb */}
          <div className="text-lg breadcrumbs mb-4 text-pink-600">
            <ul>
              <li><a href="/">Home</a></li>
              <li className="text-black">Media & Coverage</li>
            </ul>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">Media & Coverage</h1>

          {/* Paragraph */}
          <p className="text-base text-gray-600">
            Stay updated with the latest news, events, and insights about Digital Labour Chowk. Discover stories of innovation, growth, and success as we bring you comprehensive coverage of emerging businesses and entrepreneurial ventures.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <div className=" w-full max-w-md  ">
            <img
              src="https://digitallabourchowk.com/wp-content/uploads/2024/09/about-us-banner.jpg"
              alt="Construction worker"
              className="object-cover w-full h-full" style={{borderTopLeftRadius:'50%', borderTopRightRadius:'50%'}}
            />
          </div>
        </div>
      </div>
    </div>
  

  <News/>

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

export default Mediaandcoverage