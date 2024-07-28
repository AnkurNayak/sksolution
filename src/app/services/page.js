"use client";
import { motion } from "framer-motion";
import {
  HiOutlineMegaphone,
  HiOutlineRocketLaunch,
  HiOutlineStar,
  HiOutlineQrCode,
  HiOutlineSignal,
  HiOutlineBeaker,
} from "react-icons/hi2";

const Services = () => {
  const services = [
    {
      icon: <HiOutlineMegaphone size={48} color="#766DF4" />,
      title: "Manage Job Ads",
      description:
        "Efficiently manage and optimize job advertisements to reach targeted audiences and attract qualified candidates.",
    },
    {
      icon: <HiOutlineRocketLaunch size={48} color="#766DF4" />,
      title: "Temp Search",
      description:
        "Facilitate temporary job placements by offering a streamlined search process for employers and job seekers alike.",
    },
    {
      icon: <HiOutlineStar size={48} color="#766DF4" />,
      title: "Display Jobs",
      description:
        "Create visually appealing job listings that showcase company culture and attract top talent to apply.",
    },
    {
      icon: <HiOutlineQrCode size={48} color="#766DF4" />,
      title: "For Agencies",
      description:
        "Tailored solutions designed to support recruitment agencies in managing client portfolios and placements effectively.",
    },
    {
      icon: <HiOutlineSignal size={64} color="#766DF4" />,
      title: "Quick Support",
      description:
        "Dedicated customer support and assistance to resolve queries and provide solutions promptly.",
    },
    {
      icon: <HiOutlineBeaker size={64} color="#766DF4" />,
      title: "Strategy & Research",
      description:
        "In-depth market research and strategic insights to help businesses make informed decisions regarding recruitment and workforce planning.",
    },
  ];

  return (
    <div className="px-4 sm:px-20 py-8 mt-20">
      <div className="sm:p-4">
        <span className="text-xl md:text-4xl font-black text-textdark text-start flex gap-2">
          <p>Providing our trusted</p>
          <span className="text-orange-500">Services</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-y-8 gap-x-4 text-start">
          {services.map((service, index) => (
            <motion.div
              whileHover={{ y: -20 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="flex flex-col space-y-4 bg-white p-4 rounded-md shadow-md"
            >
              <span className="p-4 bg-accent rounded-md max-w-max">
                {service.icon}
              </span>
              <h4 className="text-xl font-semibold text-textdark">
                {service.title}
              </h4>
              <p className="text-base text-textdark">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
