import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify';

const Workerlogin = () => {
  const navigate = useNavigate();
  const [em, setEm] = useState("");
  const [pw, setPw] = useState("");
  const { Workerlogin } = useContext(AppContext);

  const f1 = async (e) => {
    e.preventDefault();
    console.log("Start function");
    console.log({ em, pw });

    try {
      const result = await Workerlogin(em, pw);
      console.log("Worker login response", result);

      if (result.success) {
        toast.success('Login successful!', {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
        navigate('/Sidebarworker');
      } else {
        toast.error('Invalid user ID or password!', {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('Something went wrong. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <Header />
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://www.psalegal.com/wp-content/uploads/2021/10/Labour-and-Employment.jpg")`
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg"></div>

        <div className="relative z-10 card w-96 bg-base-100 shadow-xl p-6 rounded-lg">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-gray-800">Worker Login</h2>

            <form onSubmit={f1}>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700">Email</span>
                </label>
                <input
                  value={em}
                  onChange={(e) => setEm(e.target.value)}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text text-gray-700">Password</span>
                </label>
                <input
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-success text-lg">
                  Login
                </button>
              </div>

              <p className="mt-4 text-center text-gray-600">
                Don't have an account?{" "}
                <a href="/Workerregister" className="text-green-500 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workerlogin;
