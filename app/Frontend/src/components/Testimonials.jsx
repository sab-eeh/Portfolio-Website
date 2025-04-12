import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

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
  // {
  //   company: "Vuji Cafe",
  //   review: "From start to finish, Sabeeh was a true professional. He delivered exactly what we needed—a fast, user-friendly site that reflects our brand perfectly.",
  //   name: "Mark Johnson",
  //   designation: "CEO",
  // },
  // {
  //   company: "Mina Group",
  //   review: "Working with Sabeeh was a fantastic experience. He’s responsive, creative, and knows exactly how to build a site that stands out.",
  //   name: "Sarah Brown",
  //   designation: "Marketing Director",
  // },
];

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-center gap-10 items-start lg:px-20 lg:py-15 text-white">
        <div className="w-full lg:space-y-4">
          <h1 className="font-extrabold lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-purple-300 text-transparent bg-clip-text">
              My Client's Stories
            </span>
          </h1>
          <p className="text-lg">
            I’ve had the pleasure of working with some amazing brands and
            business owners. Here’s what a few of them had to say about their
            experience working with me:
          </p>
        </div>
        <div className="w-full flex justify-between gap-5">
          {testimonials.map((testimonial, index) => (
            <div className="w-80 border-1 border-gray-800 rounded-lg backdrop-blur-2xl bg-[#1a153557] lg:p-6  flex flex-col space-y-6 cursor-pointer hover:bg-[#1a153577] hover:border-gray-600">
              <div className="text-left">
                <h1 className="font-semibold text-xl">{testimonial.company}</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                <BiSolidLeftArrow className="text-xl text-purple-600" />
                <BiSolidRightArrow className="text-xl text-purple-600" />
                </div>
                <p className="text-purple-300">"{testimonial.review}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-300 font-normal">
                  {testimonial.designation}

                  </p>
                </div>

                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
