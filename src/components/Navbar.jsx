import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "works", label: "Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center md:px-10 md:py-5 px-4 py-3 z-50 backdrop-blur-xl bg-white/5 shadow-lg">
        <div>
          <button onClick={() => scrollToSection("home")}>
            <h1 className="text-purple-300 font-extrabold text-2xl">
              Sabeeh.Dev
            </h1>
          </button>
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
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-purple-400 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer"
          >
            Hire me
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a23] px-6 py-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="text-purple-300 font-bold text-2xl">
              <button
                onClick={() => scrollToSection("home")}
                style={{ fontFamily: "Poetsen One" }}
              >
                Sabeeh.Dev
              </button>
            </div>
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-white font-semibold mt-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-purple-400 text-left w-full"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl"
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
