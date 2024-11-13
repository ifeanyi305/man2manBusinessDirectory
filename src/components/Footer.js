import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Man2Man business directory is a leading business directory platform helping users discover top-rated local businesses.
            Connecting customers with the best services around them.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:text-gray-300">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-gray-300">Services</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-300">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Email: info@businessdirectory.com</p>
          <p className="text-sm mb-2">Phone: +1 (234) 567-8901</p>
          <p className="text-sm">Address: 123 Main St, Anytown, USA</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-400" />

      {/* Social Media and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            className="hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2024 Business Directory. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
