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
      <header className="fixed top-0 left-0 right-0 bg-gray-950 flex justify-between items-center md:px-10 md:py-5 px-4 py-3 z-50 backdrop-blur-2xl">
        <div className="text-purple-300 font-bold text-xl">Sabeeh Dev</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop/Tablet Nav */}
        <nav className="hidden md:block">
          <ul className="text-white md:text-md flex md:gap-6 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-purple-400 ${isActive ? "text-purple-400" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop/Tablet Button */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <button className="text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer">
              Hire me
            </button>
          </NavLink>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 px-6 py-4 z-40">
          <ul className="flex flex-col gap-4 text-white font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  onClick={toggleMenu}
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-purple-400 ${isActive ? "text-purple-400" : ""}`
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
