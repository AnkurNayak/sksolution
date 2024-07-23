"use client";

import {
  HiCodeBracket,
  HiOutlineArrowSmallRight,
  HiOutlineCurrencyRupee,
  HiOutlinePresentationChartLine,
  HiOutlineRocketLaunch,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { PiSyringeDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePageB = () => {
  return (
    <div className="px-4 sm:px-20 bg-white py-8">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-textdark font-bold text-3xl sm:text-5xl">
          Browse Job Categories
        </h1>
        <p className="text-sm sm:text-lg">
          Browse through our categories and find your dream job.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:py-8">
        {categories.map((category, index) => (
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="flex flex-col items-center gap-4"
          >
            <span className="p-4 bg-accent rounded-xl">{category.icon}</span>
            <span className="font-medium text-textdark text-xl">
              {category.name}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-8 text-xl">
        <motion.span whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
          <Link
            href="/jobs"
            className="bg-primary px-4 py-2 hover:bg-indigo-700 text-white font-medium rounded-md flex gap-2 items-center"
          >
            View All Jobs
            <HiOutlineArrowSmallRight size={18} />
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

// Define your categories with icons
const categories = [
  {
    name: "Accounting",
    icon: <HiOutlinePresentationChartLine size={48} color="#766DF4" />,
  },
  { name: "Development", icon: <HiCodeBracket size={48} color="#766DF4" /> },
  {
    name: "Technology",
    icon: <HiOutlineRocketLaunch size={48} color="#766DF4" />,
  },
  {
    name: "Media & News",
    icon: <HiOutlineVideoCamera size={48} color="#766DF4" />,
  },
  { name: "Medical", icon: <PiSyringeDuotone size={48} color="#766DF4" /> },
  {
    name: "Finance",
    icon: <HiOutlineCurrencyRupee size={48} color="#766DF4" />,
  },
];

export default HomePageB;
