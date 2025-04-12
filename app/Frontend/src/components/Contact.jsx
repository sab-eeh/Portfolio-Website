import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-20 text-white">
      {/* Contact Form Section */}
      <div className="border border-gray-800 rounded-lg backdrop-blur-2xl bg-[#1a153557] w-full lg:max-w-[60%] p-6 lg:p-10 space-y-6">
        <h1 className="font-extrabold text-4xl lg:text-6xl text-center lg:text-left">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            Let's Work Together
          </span>
        </h1>
        <p className="text-lg text-center lg:text-left">
          Have a project in mind or just want to say hi? I’d love to hear from you.
          Feel free to reach out and let’s build something amazing together.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
              type="tel"
              placeholder="Phone Number"
            />
          </div>

          <textarea
            className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message here . . ."
          ></textarea>

          <input
            className="w-full p-3 rounded-md bg-gradient-to-r from-purple-800 to-purple-400 text-white font-semibold cursor-pointer hover:from-purple-700 hover:to-purple-500 transition-all"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/3 space-y-6 mt-10 lg:mt-0">
        <div className="flex items-center gap-5">
          <BiLogoGmail className="text-4xl text-purple-500 bg-white p-2 rounded-3xl cursor-pointer hover:text-purple-700" />
          <div>
            <p>Email</p>
            <p className="text-purple-500 cursor-pointer">usabeeh72@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <FaPhone className="text-4xl text-purple-500 bg-white p-2 rounded-3xl cursor-pointer hover:text-purple-700" />
          <div>
            <p>Phone Number</p>
            <p className="text-purple-500 cursor-pointer">+92 331 290 4878</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-purple-500 bg-white p-2 rounded-3xl cursor-pointer hover:text-purple-700" />
          </a>
          <div>
            <a
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/sab-eeh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-purple-500 bg-white p-2 rounded-3xl cursor-pointer hover:text-purple-700" />
          </a>
          <div>
            <a
              href="https://github.com/sab-eeh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
