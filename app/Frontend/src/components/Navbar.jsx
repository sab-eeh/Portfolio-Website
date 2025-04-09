import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center lg:px-10 lg:py-5">
        <div className="text-purple-300 font-bold text-xl ">Sabeeh Dev</div>
        <nav>
          <ul className="text-white lg:text-md flex lg:gap-6 font-semibold">
            <li>
              <a className="hover:text-purple-400" href="#">About</a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#">Skills</a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#">Works</a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#">Tesitmonials</a>
            </li>
            <li>
              <a className="hover:text-purple-400" href="#">Contact</a>
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
