"use client";
import ContactImg from "@/assets/contact-img.svg";
import Image from "next/image";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
const ContactUs = () => {
  return (
    <div className="px-4 sm:px-20 py-8 mt-20 bg-white">
      <div className="p-4">
        <h1 className="text-xl md:text-4xl font-black text-textdark text-start mb-2">
          Get in touch
        </h1>
        <p>
          Start working with SK Job Solution that can provide everything you
          need to generate awareness, drive traffic, connect.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8">
          <div className="py-8 space-y-4">
            <span className="flex flex-col gap-1">
              <label className="text-lg">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-lg">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-lg">Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="text-lg">Message</label>
              <textarea
                type="text"
                placeholder="Enter your message"
                rows={6}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </span>
            <span className="flex justify-end w-full mt-8">
              <button className="px-4 py-2 bg-primary hover:bg-indigo-700 text-white font-medium rounded-md flex items-center gap-1">
                Send Message <HiOutlinePaperAirplane size={24} />
              </button>
            </span>
          </div>
          <Image
            src={ContactImg}
            height={480}
            width={480}
            alt="contact_img"
            className="hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
