import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "works", label: "Works" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <header className="w-auto bg-[var(--color-section)] text-[var(--color-accent)] shadow-md mx-2 mb-2 rounded-2xl sticky top-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => scrollToSection("home")}
        >
          <h1 className="text-[var(--color-accent)] font-extrabold text-2xl">
            SABEEH
          </h1>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-semibold text-secondary">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-section text-primary px-6 py-6 space-y-6 rounded-b-2xl shadow-lg"
          >
            <ul className="flex flex-col gap-4 font-semibold">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
