import React, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppContext from '../Context/AppContext'// ✅ Make sure this path is correct
import { toast,Bounce } from 'react-toastify';

const ContactUsPage = () => {
  const [nm, setNm] = useState("");
  const [ph, setPh] = useState("");
  const [ym, setYm] = useState("");

  const { Contactus} = useContext(AppContext); // ✅ Renamed to avoid same name as component

  const f1 = async (e) => {
    e.preventDefault();
    console.log("Start function");
    console.log({ nm, ph, ym });

    try {
      const response = await Contactus(nm,ph,ym);

      console.log("Contact submitted successfully", response);
      toast('🦄Contact submitted successfully ', {
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
      setNm("");
      setPh("");
      setYm("");
    } catch (error) {
      console.error("Contact submission error", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 gap-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question about features,
            trials, pricing, need a demo, or anything else, our team is ready to
            answer all your questions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
          {/* Contact Info */}
          <div className="bg-pink-100 rounded-2xl p-8 flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-4">
              <div className="text-pink-500 text-3xl">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700">Call us</h3>
                <p>+91 8699708784</p>
                <p>+91 9872552871 </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-pink-500 text-3xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700">Send a message</h3>
                <p>worknest2001@gmail.com</p>
                <p>tanjotkaur881@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-pink-500 text-3xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700">Our address</h3>
                <p>
                 Guru ramdass avenue Gali no.2 <br />Amritsar Road, Tarn-Taran 
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Book your visit at our office
            </h2>
            <form className="flex flex-col gap-4" onSubmit={f1}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={nm}
                  onChange={(e) => setNm(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={ym}
                onChange={(e) => setYm(e.target.value)}
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
              <button className="btn btn-primary rounded-full mt-4">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">FAQ's</h2>

        <div className="space-y-2">
          {[
            {
              q: "What is Worknest?",
              a: "Worknest is an online platform that connects contractors and companies with daily wage workers regarding their demands and needs.",
            },
            {
              q: "Why to choose Worknest?",
              a: "We provide a reliable, fast, and transparent hiring platform for daily wage workers and companies to connect easily.",
            },
            {
              q: "How to find a job in Worknest?",
              a: "Workers can register and browse job listings or get matched based on their skills and location.",
            },
            {
              q: "How can workers get paid?",
              a: "Payments are made by employers through cash, bank transfer, or digital payment methods.",
            },
            {
              q: "What steps are taken for safety?",
              a: "We verify both workers and companies and provide customer support in case of disputes.",
            },
            {
              q: "Is there any cost for workers?",
              a: "No, it is free for workers to register and use our platform.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-bold">{faq.q}</div>
              <div className="collapse-content">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src="https://digitallabourchowk.com/wp-content/uploads/2024/09/footer-img.svg"
        alt=""
        style={{ marginTop: "-3px" }}
      />

      <Footer />
    </>
  );
};

export default ContactUsPage;
