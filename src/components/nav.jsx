import React, { useState } from 'react';
import Logo from "../assets/logo/rs-logo-ws.png"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Logo Rina Sen" className="h-20 w-20 object-cover" />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 items-center text-xl font-medium">
        <li><a href="#" className="hover:text-amber-600">Home</a></li>
        <li><a href="#" className="hover:text-amber-600">About</a></li>
        <li><a href="#" className="hover:text-amber-600">Press</a></li>
        <li><a href="#" className="hover:text-amber-600">Services</a></li>

        {/* More Dropdown */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-amber-500 cursor-pointer"
          >
            More ▾
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full text-xl left-0 mt-2 bg-white border rounded shadow-md w-40">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Contact Button */}
      <a
        href="#"
        className="bg-amber-600 text-xl text-white px-6 py-4 rounded hover:bg-amber-700 transition hidden md:inline-block"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;