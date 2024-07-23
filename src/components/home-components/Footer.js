"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { HiOutlineChevronRight } from "react-icons/hi2";

const AppFooter = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#343C3F]">
        <div className="py-20 text-white text-center">
          <h1 className="text-3xl font-semibold">Get New Jobs Notification!</h1>
          <p className="font-light">
            Subscribe & get all related jobs notification.
          </p>
          <SubscriptionBox />
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

const SubscriptionBox = () => {
  return (
    <div className="flex lg:items-center flex-col sm:flex-row overflow-hidden border-[0.2px] mt-8">
      <div className="flex py-2.5 px-5 items-center w-full gap-2">
        <input
          type="text"
          className="outline-none bg-transparent"
          placeholder="Enter your email"
        />
      </div>
      <button className="py-2.5 px-5 bg-primary hover:bg-indigo-700 flex text-white tracking-wider">
        Subscribe
      </button>
    </div>
  );
};

const FooterTwo = () => {
  const companyLinks = [
    { text: "About Us", href: "/about-us" },
    { text: "Contact Us", href: "/contact-us" },
    { text: "Services", href: "/services" },
    { text: "Team", href: "/team" },
  ];

  const jobLinks = [
    { text: "Browse Categories", href: "" },
    { text: "Browse Jobs", href: "/jobs" },
    { text: "Job Details", href: "" },
    { text: "Bookmark Jobs", href: "" },
  ];

  return (
    <footer className="px-4 sm:px-20 py-14 bg-[#2E3538] text-white">
      <h1 className="text-2xl text-white py-3 font-medium">SK Job Solution</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">Company</h4>
          <ul>
            {companyLinks.map((link, index) => (
              <motion.li
                whileHover={{ letterSpacing: "0.1rem" }}
                key={index}
                className="mb-2"
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-300 flex items-center gap-2"
                >
                  <HiOutlineChevronRight />
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: For Jobs Links */}
        <div>
          <h4 className="text-lg font-medium mb-4">For Jobs</h4>
          <ul>
            {jobLinks.map((link, index) => (
              <motion.li
                whileHover={{ letterSpacing: "0.1rem" }}
                key={index}
                className="mb-2"
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-300 flex items-center gap-2"
                >
                  <HiOutlineChevronRight />
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-4">
        <Link
          href="#"
          className="p-2 rounded-full border border-accent hover:bg-gray-700"
        >
          <FaFacebookF size={18} color="#dde9fc" />
        </Link>
        <Link
          href="#"
          className="p-2 rounded-full border border-accent hover:bg-gray-700"
        >
          <RiInstagramFill size={18} color="#dde9fc" />
        </Link>
        <Link
          href="#"
          passHref
          className="p-2 rounded-full border border-accent hover:bg-gray-700"
        >
          <FaTwitter size={18} color="#dde9fc" />
        </Link>
      </div>

      {/* Footer Description */}
      <div className="mt-8 text-center">
        <p className="text-accent">
          Empower your career journey with SK job solution, where opportunities
          meet ambition.
        </p>
      </div>
      <p className="flex items-center justify-center mt-4">
        © 2024 ankurzac3@gmail.com. All rights reserved.
      </p>
    </footer>
  );
};

export default AppFooter;
