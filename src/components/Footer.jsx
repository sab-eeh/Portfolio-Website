import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] border-gray-800 text-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Sabeeh Uddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
