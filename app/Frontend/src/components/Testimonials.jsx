import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const testimonials = [
  {
    company: "Stable Cafe",
    review:
      "Sabeeh completely revamped our website with a clean, modern look that truly represents our cafe. His attention to detail and smooth communication made the whole process easy and enjoyable.",
    name: "John Doe",
    designation: "Owner",
  },
  {
    company: "Babka Bakers",
    review:
      "Sabeeh brought our vision to life with a website that’s not only beautiful but functional. We've seen a noticeable increase in orders since launching the new site.",
    name: "Jane Smith",
    designation: "Head Baker",
  },
  {
    company: "Vuji Cafe",
    review:
      "From start to finish, Sabeeh was a true professional. He delivered exactly what we needed—a fast, user-friendly site that reflects our brand perfectly.",
    name: "Mark Johnson",
    designation: "CEO",
  },
];

const Testimonials = () => {
  return (
    <div className="relative text-white px-4 lg:px-20 py-20 space-y-12 backdrop-blur-xl bg-white/5 shadow-lg">
      <div className="absolute w-[200px] h-[200px] bg-blue-700/40 blur-[150px] rounded-full -z-10 top-20 right-100"></div>
      {/* Header */}
      <div className="space-y-4 max-w-3xl  mx-auto text-center ">
        <h1 className="font-extrabold text-4xl lg:text-6xl">
          <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
            My Client's Stories
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          I’ve had the pleasure of working with some amazing brands and
          business owners. Here’s what a few of them had to say about their
          experience working with me:
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[30%] border border-gray-800 rounded-lg backdrop-blur-xl shadow-lg p-6 flex flex-col space-y-6 hover:bg-[#1a153577] hover:border-gray-600 transition-all duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{testimonial.company}</h2>

            <div className="space-y-3">
              <div className="flex items-center">
                <BiSolidLeftArrow className="text-xl text-purple-600" />
                <BiSolidRightArrow className="text-xl text-purple-600" />
              </div>
              <p className="text-purple-300 text-sm">"{testimonial.review}"</p>

              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-purple-300 text-sm">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
