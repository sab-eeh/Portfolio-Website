import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-gray-950 backdrop-blur-sm flex justify-between items-center lg:px-10 lg:py-5">
        <div className="text-purple-300 font-bold text-xl ">Sabeeh Dev</div>
        <nav>
          <ul className="text-white lg:text-md flex lg:gap-6 font-semibold">
            <li>
              <Link className="hover:text-purple-400" to="/hero">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" to="/Works">
                Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" to="/testimonials">
                Tesitmonials
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="text-white font-semibold px-6 py-2 bg-purple-600 rounded-xl cursor-pointer">
            Hire me
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
