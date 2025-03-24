import React from "react";
import Logo from "../assets/logo/rs-logo-ws.png";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 py-8 mt-16 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={Logo} alt="Logo" className="h-30 mb-2" />
          <p className="text-sm text-black">
            © {new Date().getFullYear()} TheDigitalFlix. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-black mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-black mb-3">Highlights</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Highlight 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Highlight 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Highlight 3
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-black mb-3">Contact</h4>
          <p className="text-sm text-gray-600">reenasen014@gmail.com</p>
          <p className="text-sm text-gray-600">+917089225290 </p>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/share/1ALqmGvos1/?mibextid=wwXIfr"
              target="_blank"
              className="text-2xl text-black hover:text-gray-600"
            >
              <RiFacebookCircleLine />
            </a>
            <a
              href="https://www.instagram.com/rina_sen_ind/"
              target="_blank"
              className="text-2xl text-black hover:text-gray-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
