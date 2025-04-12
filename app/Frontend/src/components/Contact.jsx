import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10  lg:px-20 lg:py-15  text-white">
        <div className="border-gray-800 rounded-lg backdrop-blur-2xl bg-[#1a153557]  lg:space-y-4 lg:p-10">
          <h1 className="font-extrabold lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
              Let's Work Together
            </span>
          </h1>
          <p className="text-lg">
            Have a project in mind or just want to say hi? I’d love to hear from
            you. Feel free to reach out and let’s build something amazing
            together.
          </p>
          <div>
            <form className="lg:py-10" action="" method="get">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <input
                    className="w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                  <input
                    className="w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                  <input
                    className="w-full"
                    type="number"
                    name=""
                    id=""
                    placeholder="Phone Number"
                  />
                </div>
                <div className="space-y-3">
                  <textarea
                    className="w-full "
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here . . ."
                  ></textarea>
                  <input
                    className="cursor-pointer bg-gradient-to-r from-purple-800 to-purple-400 "
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full">
          <div className="space-y-6 w-1/2 mx-auto">
            <div className="flex items-center gap-5">
              <BiLogoGmail className="lg:text-5xl text-purple-500 bg-white p-2 rounded-3xl  cursor-pointer hover:text-purple-700" />
              <div>
                <p>Email</p>
                <p className="text-purple-500 cursor-pointer">
                  usabeeh72@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-5">
              <FaPhone className="lg:text-5xl text-purple-500 bg-white p-2 rounded-3xl  cursor-pointer hover:text-purple-700" />
              <div>
                <p>Phone Number</p>
                <p className="text-purple-500 cursor-pointer">
                  +92 331 290 4878
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                target="blank"
              >
                <FaLinkedin className="lg:text-5xl text-purple-500 bg-white p-2 rounded-3xl  cursor-pointer hover:text-purple-700" />
              </a>

              <div>
                <a
                  href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                  target="blank"
                  className="hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://github.com/sab-eeh" target="blank">
                <FaGithub className="lg:text-5xl text-purple-500 bg-white p-2 rounded-3xl  cursor-pointer hover:text-purple-700" />
              </a>

              <div>
                <a
                  href="https://github.com/sab-eeh"
                  className="hover:text-purple-400"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
