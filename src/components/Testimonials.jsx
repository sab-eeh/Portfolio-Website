import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    company: "SkyWebDesign Agency",
    review:
      "Sabeeh created an exceptional website for our agency, capturing our brand essence perfectly. His expertise in design and development ensured a seamless experience from concept to launch.",
    name: "Luspex",
    designation: "Owner",
  },
  {
    company: "Yash",
    review:
      "Sabeeh brilliantly translated our Figma design into a stunning, functional website. His attention to detail and technical proficiency exceeded our expectations, delivering a site that stands out.",
    name: "Yash",
    designation: "Client",
  },
  {
    company: "Wajeeh",
    review:
      "Working with Sabeeh was a delight. He not only met but exceeded our expectations with his professionalism and creativity. Our new website has received rave reviews!",
    name: "Wajeeh",
    designation: "Client",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <div className="relative text-white px-4 lg:px-20 py-20 space-y-12 backdrop-blur-xl bg-black/20  shadow-lg">
      <div className="absolute w-[200px] h-[200px] bg-blue-700/40 blur-[150px] rounded-full -z-10 top-20 right-100"></div>

      {/* Header */}
      <div className="space-y-4 max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-4xl lg:text-6xl">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            My Client's Stories
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          I’ve had the pleasure of working with some amazing brands and
          business owners. Here’s what a few of them had to say:
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full md:w-[45%] lg:w-[30%] border bg-white/10  border-gray-700 rounded-lg backdrop-blur-xl shadow-lg p-6 flex flex-col space-y-6 hover:bg-[#1a153577] hover:border-gray-600 transition-all duration-200 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <h2 className="text-xl font-semibold">{testimonial.company}</h2>
            <div className="space-y-3">
              <FaQuoteLeft className="text-purple-600 text-xl" />
              <p className="text-purple-300 text-sm">"{testimonial.review}"</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-purple-300 text-sm">{testimonial.designation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
