import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-section)] text-[var(--color-primary)] py-10 px-6 mx-2 rounded-2xl shadow-inner shadow-amber-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand / About */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Sabeeh Uddin</h2>
          <p className="text-[var(--color-accent)] text-sm leading-relaxed">
            Web Developer & Designer. I build modern, responsive, and
            user-friendly experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2 text-[var(--color-accent)]">
            <li>
              <a href="#home" className="hover:text-[var(--color-primary)] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[var(--color-primary)] transition">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-[var(--color-primary)] transition">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--color-primary)] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Connect</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-[var(--color-accent)]">
            <a
              href="mailto:usabeeh72@gmail.com"
              className="hover:text-[var(--color-primary)] transition"
            >
              <BiLogoGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sab-eeh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)]transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e6d5c3] mt-10 pt-6 text-center text-sm text-[var(--color-primary)]">
        &copy; {new Date().getFullYear()} Sabeeh Uddin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
