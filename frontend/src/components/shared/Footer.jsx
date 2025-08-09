"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-neutral-800 pb-8">
        
        {/* Profile Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-lime-500 cursor-pointer">
            shubhamprajapati.com
          </h2>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Data Science Enthusiast & B.Tech CSE Student passionate about
            building intelligent solutions with data and code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-neutral-400">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-lime-400 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-neutral-400 text-sm">
            <li>Open for opportunities and collaborations</li>
            <li>
              Email:{" "}
              <a
                href="mailto:shubham.jitendra.prajapati@gmail.com"
                className="font-semibold text-lime-400 hover:text-lime-50 transition duration-200"
              >
                shubham.jitendra.prajapati@gmail.com
              </a>
            </li>
            <li>Location: Gorakhpur, UP, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-neutral-500 gap-2">
        <p className="text-center sm:text-left">
          Turning ideas into code, and code into impact.
        </p>
        <p className="text-center sm:text-right">
          Built with <span className="text-red-500">♥</span> Thanks for visiting!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
