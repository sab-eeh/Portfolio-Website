import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideExtras, setHideExtras] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideExtras(true);
      } else {
        setHideExtras(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex justify-between items-center md:px-10 md:py-5 px-4 py-3 z-50 `}
      >
        <div
          className={`transition-opacity duration-300 ${
            hideExtras ? "opacity-0" : "opacity-100"
          }`}
        >
          <button onClick={() => scrollToSection("home")}>
            <h1 className="text-black font-extrabold text-2xl">Sabeeh.Dev</h1>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:block px-10 py-4 rounded-3xl backdrop-blur-xl bg-black shadow-lg -ml-5"
        >
          <ul className="text-white md:text-md flex md:gap-6 font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <span>|</span>
            <div className="flex items-center gap-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                href="https://github.com/sab-eeh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 rounded-4xl"
              >
                <FaGithub className="text-xl md:text-2xl cursor-pointer" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 rounded-4xl"
              >
                <FaLinkedin className="text-lg md:text-2xl cursor-pointer" />
              </motion.a>
            </div>
          </ul>
        </motion.nav>

        {/* Desktop Hire Me Button */}
        <div
          className={`transition-opacity duration-300 hidden md:block ${
            hideExtras ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="text-black font-semibold px-8 py-3 border-2 border-black rounded-3xl cursor-pointer hover:border-2 hover:bg-black hover:text-white "
          >
            Hire me
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F0F0F] px-6 py-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-2xl">
              <button onClick={() => scrollToSection("home")}>
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
                  className="hover:text-gray-300 cursor-pointer text-left w-full"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 text-white font-semibold px-6 py-2 border-1 cursor-pointer rounded-xl"
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
