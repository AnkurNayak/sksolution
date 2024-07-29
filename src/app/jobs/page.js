"use client";
import { jobs } from "@/components/mock-api/HomePageMockApi";
// import Link from "next/link";
import {
  HiCurrencyRupee,
  HiMapPin,
  HiMiniPhone,
  // HiOutlineCurrencyRupee,
  // HiOutlineMapPin,
  // HiOutlinePhoneArrowDownLeft,
} from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

const JobsPage = () => {
  return (
    <div className="px-4 sm:px-20 bg-white py-8 mt-20">
      <div className="p-4">
        <p className="text-xl md:text-4xl font-black text-textdark text-start mb-2">
          Available Jobs
        </p>
        <div className="grid gap-4 grid-cols-1">
          {jobs.map((job, index) => (
            <Card
              key={index}
              title={job.title}
              jobDescription={job.jobDescription}
              location={job.location}
              salaryRange={job.salaryRange}
              applyLink={job.applyLink}
              phone={job.phoneNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  jobDescription,
  location,
  salaryRange,
  // applyLink,
  phone,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* {isOpen && <ApplyForm isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
        <motion.div
          // whileTap={{ background: "linear-gradient(to right, #7c3aed, #4f46e5)" }}
          className="inset-0"
        />

        <h3 className="font-medium text-lg text-slate-950">{title}</h3>
        <div className="py-4 flex flex-col gap-1">
          <p className="text-slate-500">{jobDescription}</p>
          <p className=" text-slate-950 flex gap-1 items-center">
            <HiMapPin size={24} className="text-indigo-600" />
            {location}
          </p>
          <p className="text-slate-950 flex gap-1 items-center">
            <HiCurrencyRupee size={24} className="text-indigo-600" />
            {salaryRange}
          </p>
          <p className="text-slate-950  flex gap-1 items-center">
            <HiMiniPhone size={24} className="text-indigo-600" />
            {phone}
          </p>
        </div>
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Apply
        </button>
      </div>
    </>
  );
};

const ApplyForm = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[200] grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2">
                Apply for the Job
              </h3>
              <p className="text-center mb-6">
                Please fill out the form below to apply for the job.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 rounded border border-gray-300 text-black"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 rounded border border-gray-300 text-black"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-2 rounded border border-gray-300 text-black"
                    placeholder="+91 9876543210"
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="resume"
                    className="block text-lg font-medium mb-1"
                  >
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full p-2 rounded border border-gray-300 text-white"
                  />
                </div> */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-lg font-medium mb-1"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="4"
                    className="w-full p-2 rounded border border-gray-300 text-black"
                    placeholder="Write your cover letter here..."
                  />
                </div>
              </form>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobsPage;
