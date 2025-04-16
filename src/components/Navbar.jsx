import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/works", label: "Works" },
    { to: "/testimonials", label: "Tesitmonials" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center md:px-10 md:py-5 px-4 py-3 z-50 backdrop-blur-xl bg-white/5 shadow-lg ">
        <div className="text-purple-300 font-bold text-2xl">
          <NavLink to="/home" style={{ fontFamily: "Poetsen One" }}>
            Sabeeh.Dev
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="text-white md:text-md flex md:gap-6 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-purple-400 ${
                      isActive ? "text-purple-400" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <button className="text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer">
              Hire me
            </button>
          </NavLink>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a23] px-6 py-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="text-purple-300 font-bold text-2xl">
              <NavLink to="/home" onClick={toggleMenu} style={{ fontFamily: "Poetsen One" }}>
                Sabeeh.Dev
              </NavLink>
            </div>
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-white font-semibold mt-12">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  onClick={toggleMenu}
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-purple-400 ${
                      isActive ? "text-purple-400" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink onClick={toggleMenu} to="/contact">
                <button className="w-full mt-2 text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl">
                  Hire me
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
