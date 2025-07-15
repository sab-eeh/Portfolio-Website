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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const { fullname, email, message } = formData;

    // Basic input validation
    if (!fullname || !email || !message) {
      setStatus("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, message }),
      });

      let data = {};

      try {
        data = await response.json(); // Safely parse JSON
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
        throw new Error("Invalid server response. Please try again later.");
      }

      if (!response.ok) {
        console.error(
          "Server responded with error:",
          data?.error || "Unknown error"
        );
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("✅ Message sent successfully!");
      setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col lg:flex-row items-start justify-center gap-6 px-4 sm:px-6 lg:px-16 py-20 text-black bg-[#F6F6F6]  shadow-lg">
      {/* Contact Form Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border bg-white/10  border-gray-700 rounded-lg backdrop-blur-xl shadow-lg w-full lg:max-w-[55%] p-6 sm:p-8 lg:p-10 space-y-6"
      >
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-4xl md:text-3xl text-center lg:text-left">
          <span className="text-black">Send me a Message</span>
        </h1>
        <p className="text-lg text-center lg:text-left text-black font-semibold">
          Have a project in mind or just want to say hi? I’d love to hear from
          you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-purple-400"
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:border-purple-400"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:border-purple-400"
            rows="6"
            name="message"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input
            className="w-full p-3 rounded-md bg-[#0F0F0F] text-white font-semibold cursor-pointer transition-all"
            type="submit"
            value={loading ? "Sending..." : "Send Message"}
            disabled={loading}
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
        className="w-full lg:w-1/3 space-y-6 mt-10 lg:mt-0 flex-col "
      >
        <div className="border bg-[#F6F6F6]  border-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-6 cursor-pointer">
          <h1 className="text-2xl font-semibold">Contact Information</h1>
          <div className="flex items-center gap-5">
            <BiLogoGmail className="text-4xl text-black border border-black p-2 rounded-3xl" />
            <div>
              <p className="font-medium">Email</p>
              <a
                className="text-gray-700 hover:underline"
                href="mailto:usabeeh72@gmail.com"
              >
                usabeeh72@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaPhone className="text-4xl text-black border border-black p-2 rounded-3xl" />
            <div>
              <p className="font-medium">Phone Number</p>
              <p className="text-gray-700">+92 331 290 4878</p>
            </div>
          </div>
        </div>
        <div className="border bg-[#F6F6F6] border-gray-800 rounded-lg shadow-lg p-6 flex flex-col space-y-6 cursor-pointer">
          <h1 className="text-2xl font-semibold">Connect with Me</h1>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl text-black border border-black p-2 rounded-3xl hover:bg-white" />
            </a>
            <div>
              <a
                href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 font-medium"
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
              <FaGithub className="text-4xl text-black border border-black p-2 rounded-3xl hover:bg-white" />
            </a>
            <div>
              <a
                href="https://github.com/sab-eeh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
