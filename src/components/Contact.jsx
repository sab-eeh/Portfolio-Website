// src/components/Contact.jsx
import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
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
    if (!fullname || !email || !message) {
      setStatus("❌ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, message }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response. Try again later.");
      }

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("✅ Message sent successfully!");
      setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[var(--color-section)] text-[var(--color-primary)] px-6 sm:px-10 lg:px-14 py-20 rounded-2xl shadow-inner shadow-amber-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="italic text-[var(--color-accent)]">Get in</span>{" "}
          Touch
        </h1>
        <p className="text-[var(--color-primary)] text-base sm:text-lg font-medium">
          Have a project idea or just want to say hi? I’d love to connect with
          you.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Contact Form Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[var(--color-section)] border border-[#f5dec8] rounded-2xl shadow-lg hover:shadow-amber-200/20 transition-all w-full lg:max-w-[55%] p-6 sm:p-8 lg:p-10 space-y-6"
        >
          <h2 className="font-bold text-2xl sm:text-3xl">Send me a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-[#d0bfae]/40 text-[var(--color-primary)] focus:outline-none focus:border-[#d0bfae]"
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 rounded-md bg-transparent border border-[#d0bfae]/40 text-[var(--color-primary)]  focus:outline-none focus:border-[#d0bfae] "
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full p-3 rounded-md bg-transparent border border-[#d0bfae]/40 text-[var(--color-primary)]  focus:outline-none focus:border-[#d0bfae]"
              rows="6"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 rounded-md bg-[#d0bfae] text-black font-semibold cursor-pointer transition-all"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <p className="text-center pt-2 text-sm text-[var(--color-accent)]">
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-6"
        >
          {/* Email & Phone */}
          <div className="bg-[var(--color-section)] border border-[#f5dec8] rounded-2xl shadow-lg p-6 space-y-6 hover:shadow-amber-200/20 transition-all">
            <h3 className="text-xl font-semibold text-[var(--color-accent)]">
              Contact Information
            </h3>
            <div className="flex items-center gap-4">
              <BiLogoGmail className="text-3xl text-[var(--color-accent)]" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  href="mailto:usabeeh72@gmail.com"
                >
                  usabeeh72@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-3xl text-[var(--color-accent)]" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-[var(--color-primary)]">+92 331 290 4878</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[var(--color-section)] border border-[#f5dec8] rounded-2xl shadow-lg p-6 space-y-6 hover:shadow-amber-200/20 transition-all">
            <h3 className="text-xl font-semibold text-[var(--color-accent)]">
              Connect with Me
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sabeeh-uddin-91464a252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-[var(--color-accent)] hover:scale-110 transition-transform" />
              </a>
              <span className="text-[var(--color-primary)]">LinkedIn</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sab-eeh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl text-[var(--color-accent)] hover:scale-110 transition-transform" />
              </a>
              <span className="text-[var(--color-primary)]">GitHub</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
