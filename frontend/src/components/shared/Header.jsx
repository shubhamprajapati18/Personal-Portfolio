import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger & close

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/achievements", label: "Achievements" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center px-6 py-5 shadow-lg backdrop-blur-md bg-black/10 border border-white/10">
        
        {/* Left: Logo / Name */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bitcount-font">
            Shubham Prajapati
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link-effect transition ${
                    isActive ? "text-lime-500" : "hover:text-lime-500"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 border-t border-white/10 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `nav-link-effect transition ${
                        isActive ? "text-lime-500" : "hover:text-lime-500"
                      }`
                    }
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
