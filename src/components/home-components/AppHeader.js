"use client";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import { HiOutlineFingerPrint, HiPhone } from "react-icons/hi2";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { IoIosPeople } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => setIsOpen((prev) => !prev);
  const { scrollY } = useScroll();
  const [scrollVal, setScrollVal] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollVal(latest);
  });

  const fixedStyle = {
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(15px)",
    position: "fixed",
    minWidth: "100vw",
    WebkitBackdropFilter: "blur(15px)",
    top: 0,
    zIndex: 60,
  };

  return (
    <>
      <motion.header
        className="shadow-lg p-4 lg:p-6 min-w-max"
        style={fixedStyle}
        initial={{ background: "white" }}
        animate={{ background: scrollVal > 0 ? "" : "white" }}
      >
        <div className="flex justify-between w-full items-center h-full">
          <div className="flex items-center gap-1">
            <HiOutlineFingerPrint size={48} color="#766DF4" />
            <h1 className="text-3xl font-black flex gap-2">
              <span className="text-primary">SK</span>
              <span className="text-secondary">JOB SOLUTION</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <motion.nav className="hidden lg:flex">
              <NavigationMenu />
            </motion.nav>
            <div className="hidden lg:flex">
              <PhoneButton />
            </div>
            <button
              className="p-2 rounded-full hover:bg-hover lg:hidden"
              onClick={toggleNavigation}
            >
              <HiMiniBars3 size={32} />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: 280 }}
            animate={{ x: 0 }}
            exit={{ x: 280 }}
            transition={{ duration: 0.3, stiffness: 300 }}
            className="fixed lg:hidden right-0 navigation bg-white top-20"
          >
            <NavigationMenu />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const NavigationMenu = () => {
  const pathName = usePathname();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="flex gap-1 lg:gap-4 items-start lg:items-center h-full font-medium text-lg flex-col lg:flex-row px-2 rounded-md mt-4 lg:mt-0">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center p-2.5 w-full min-w-max rounded-md text-lg hover:text-primary font-semibold ${
            pathName === item.href ? "text-primary" : "text-secondary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const PhoneButton = () => {
  return (
    <motion.button className="relative flex items-center p-2 pr-4 rounded-full gap-1 overflow-hidden bg-primary hover:bg-indigo-700">
      <motion.span
        className="absolute inset-0 "
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10 bg-white p-2 rounded-full">
        <HiPhone color="#766DF4" size={16} />
      </span>
      <span className="relative md:text-xl text-white font-medium min-w-max">
        +91-0123456789
      </span>
    </motion.button>
  );
};

export default AppHeader;
