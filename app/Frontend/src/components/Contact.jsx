import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-16 py-20 text-white backdrop-blur-xl bg-white/5 shadow-lg">
      <div className="absolute w-[200px] h-[200px] bg-blue-700/40 blur-[130px] rounded-full -z-10 bottom-50 right-100"></div>

      {/* Contact Form Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-gray-800 rounded-lg backdrop-blur-xl shadow-lg w-full lg:max-w-[55%] p-6 sm:p-8 lg:p-10 space-y-6"
      >
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            Let's Work Together
          </span>
        </h1>
        <p className="text-lg text-center lg:text-left">
          Have a project in mind or just want to say hi? I’d love to hear from
          you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-3 rounded-md bg-white/10 border border-gray-700 focus:outline-none focus:border-purple-400"
            rows="6"
            name="message"
            placeholder="Write your message here . . ."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input
            className="w-full p-3 rounded-md bg-gradient-to-r from-purple-800 to-purple-400 text-white font-semibold cursor-pointer hover:from-purple-700 hover:to-purple-500 transition-all"
            type="submit"
            value="Send Message"
          />

          {status && (
            <p className="text-center pt-2 text-sm text-purple-400">{status}</p>
          )}
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/3 space-y-6 mt-10 lg:mt-0 flex flex-col items-start lg:items-start text-start lg:text-left"
      >
        <div className="flex items-center gap-5">
          <BiLogoGmail className="text-4xl text-white border border-purple-500 p-2 rounded-3xl cursor-pointer hover:bg-purple-600" />
          <div>
            <p>Email</p>
            <p className="text-purple-500 cursor-pointer">
              usabeeh72@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <FaPhone className="text-4xl text-white border border-purple-500 p-2 rounded-3xl cursor-pointer hover:bg-purple-600" />
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
            <FaLinkedin className="text-4xl text-white border border-purple-500 p-2 rounded-3xl cursor-pointer hover:bg-purple-600" />
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
          <a
            href="https://github.com/sab-eeh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl text-white border border-purple-500 p-2 rounded-3xl cursor-pointer hover:bg-purple-600" />
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
      </motion.div>
    </div>
  );
};

export default Contact;
