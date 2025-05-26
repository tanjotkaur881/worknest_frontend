import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkerLogo from "../Component/Screenshot 2025-04-22 115014.png"; // your logo import
import Worker from '../Component/Worker';
import AboutUs from '../Component/AboutUs';
import Mediaandcoverage from '../Component/Mediaandcoverage';
import Mediancoveragechannels from "../Component/Mediancoveragechannels";
import Contactus from "./Contactus";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src={WorkerLogo}
            alt="Worknest Logo"
            className="h-12 w-12 object-contain rounded-full border-2 border-white p-2"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-white">Worknest</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/Worker">Worker</CustomLink>
          <CustomLink to="/AboutUs">About Us</CustomLink>
          <CustomLink to="/Mediaandcoverage">Media and coverage</CustomLink>
          <CustomLink to="/ContactUsPage">Contact</CustomLink>
        </div>

        {/* Big Login Button (Desktop) */}
        <div className="hidden md:block">
        <div className="hidden md:block">
        <div className="hidden md:block">
        <div className="hidden md:block">
        <div className="hidden md:block">
  <Link
    to="/Mainlogin"
    className="bg-gradient-to-r from-white to-gray-100 text-blue-600 font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 transform"
  >
    Login
  </Link>
</div>

</div>

</div>

</div>

        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 pt-4 pb-6 space-y-4 shadow-md transform transition-all duration-300 ease-in-out">
          <MobileLink to="/" setMenuOpen={setMenuOpen}>Home</MobileLink>
          <MobileLink to="/worker" setMenuOpen={setMenuOpen}>Worker</MobileLink>
          <MobileLink to="/about" setMenuOpen={setMenuOpen}>About Us</MobileLink>
          <MobileLink to="/media" setMenuOpen={setMenuOpen}>Media</MobileLink>
          <MobileLink to="/contact" setMenuOpen={setMenuOpen}>Contact</MobileLink>
          
          {/* Mobile Login Button */}
          <div className="pt-4">
            <Link
              to="/login"
              className="w-full text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Custom link component for desktop nav
const CustomLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group hover:text-yellow-400 transition-all duration-300"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
  </Link>
);

// Custom link for mobile menu
const MobileLink = ({ to, children, setMenuOpen }) => (
  <Link
    to={to}
    className="block text-lg font-medium hover:text-yellow-400 transition-all duration-300"
    onClick={() => setMenuOpen(false)}
  >
    {children}
  </Link>
);

export default Header;
