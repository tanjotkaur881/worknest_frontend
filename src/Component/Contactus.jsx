import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Contactus = () => {
  const[nm, setNm]= useState("")
  const[ph, setPh]= useState("")
  const[ym, setYm]= useState("")

  const f1 = async (e) => {
    e.preventDefault();
    console.log("Start function");
    console.log({ nm, ph, ym });
  }
  return (

     
<>
    <Header/>
    <div className="flex flex-col items-center p-6 gap-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you! Whether you have a question about features, trials,
          pricing, need a demo, or anything else, our team is ready to answer all your
          questions.
        </p>
      </div>

      {/* Contact and Form Section */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="bg-pink-100 rounded-2xl p-8 flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="text-pink-500 text-3xl">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Call us</h3>
              <p>+91 9654007500</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-pink-500 text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Send a message</h3>
              <p>info@digitallabourchowk.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-pink-500 text-3xl">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">Our address</h3>
              <p>
                1st Floor, Software Technology Park of India, Sector 29, Near
                Botanical Garden Metro Station, Noida, Uttar Pradesh - 201301
              </p>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Book your visit at our office
          </h2>
          <form className="flex flex-col gap-4" onSubmit={f1}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={nm}  onChange={(e)=>setNm(e.target.value)}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                value={ph}  onChange={(e)=>setPh(e.target.value)}
                placeholder="Phone Number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={ym}  onChange={(e)=>setYm(e.target.value)}
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
            <button className="btn btn-primary rounded-full mt-4">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">FAQ's</h2>

      <div className="space-y-2">
        {/* Question 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-lg font-bold">
            What is Worknest?
          </div>
          <div className="collapse-content">
            <p>
            Worknest is an online platform that connects contractors
              and companies with daily wage workers regarding their demands and needs.
              Worknest facilitates the process of hiring and finding work opportunities.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-bold">
            Why to choose Worknest?
          </div>
          <div className="collapse-content">
            <p>
              We provide a reliable, fast, and transparent hiring platform for daily wage workers
              and companies to connect easily.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-bold">
            How to find a job in Worknest?
          </div>
          <div className="collapse-content">
            <p>
              Workers can easily register on our platform and browse available job listings
              or get matched based on their skills and location.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-bold">
            How can workers get paid for their services?
          </div>
          <div className="collapse-content">
            <p>
              Payments are made directly by the employers based on the terms agreed upon
              during hiring through cash, bank transfer, or digital payment methods.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-bold">
            What steps are taken to ensure the safety of workers on platform?
          </div>
          <div className="collapse-content">
            <p>
              We verify both workers and companies to maintain safety and trust.
              We also provide customer support in case of disputes.
            </p>
          </div>
        </div>

        {/* Question 6 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-bold">
            Is there any cost associated with using Worknest as a worker?
          </div>
          <div className="collapse-content">
            <p>
              No, it is absolutely free for workers to register and use our platform
              to find job opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>

    <img  src="https://digitallabourchowk.com/wp-content/uploads/2024/09/footer-img.svg" alt="" style={{marginTop:"-3px"}} />
  
  <Footer/>
    </>
  );
};

export default Contactus;
