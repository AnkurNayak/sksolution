"use client";
import { jobs } from "@/components/mock-api/HomePageMockApi";
import Link from "next/link";
import {
  HiCurrencyRupee,
  HiMapPin,
  HiMiniPhone,
  HiOutlineCurrencyRupee,
  HiOutlineMapPin,
  HiOutlinePhoneArrowDownLeft,
} from "react-icons/hi2";
import { motion } from "framer-motion";

const JobsPage = () => {
  return (
    <div className="px-4 sm:px-20 bg-white py-8 mt-20">
      <div className="p-4">
        <p className="text-xl font-semibold mb-2">Available Jobs</p>
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
  applyLink,
  phone,
}) => {
  return (
    <Link
      href={applyLink}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <motion.div
        whileTap={{ background: "linear-gradient(to right, #7c3aed, #4f46e5)" }}
        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"
      />

      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <div className="py-4 flex flex-col gap-1">
        <p className="text-slate-500 group-hover:text-violet-200 relative z-10 duration-300">
          {jobDescription}
        </p>
        <p className=" text-slate-950 group-hover:text-white relative z-10 duration-300 flex gap-1 items-center">
          <HiMapPin
            size={24}
            className="text-indigo-600 group-hover:text-white"
          />
          {location}
        </p>
        <p className="text-slate-950 group-hover:text-white relative z-10 duration-300 flex gap-1 items-center">
          <HiCurrencyRupee
            size={24}
            className="text-indigo-600 group-hover:text-white"
          />
          {salaryRange}
        </p>
        <p className="text-slate-950 group-hover:text-white relative z-10 duration-300 flex gap-1 items-center">
          <HiMiniPhone
            size={24}
            className="text-indigo-600 group-hover:text-white"
          />
          {phone}
        </p>
      </div>
      <p className="italic font-light text-slate-950 group-hover:text-white relative z-10 duration-300">
        (click to apply)
      </p>
    </Link>
  );
};

export default JobsPage;
