"use client";
import { useState } from "react";
import Image from "next/image";
import bannerImg1 from "@/assets/howitwork.svg";
import bannerImg2 from "@/assets/howitwork2.svg";
import { motion, AnimatePresence } from "framer-motion";

const HomePageC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Find your job",
      description:
        "Explore our extensive job listings tailored to your skills and preferences. Use advanced search filters to quickly find the perfect match for your career aspirations.",
      image: bannerImg1,
    },
    {
      title: "Apply for the job",
      description:
        "Submit your application easily through our platform. Follow a simple process to ensure your resume and cover letter stand out, and track your application's status effortlessly",
      image: bannerImg2,
    },
  ];

  return (
    <div className="px-4 sm:px-20 bg-white py-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-4xl text-textdark font-bold">How it works</h1>
          <p className="text-sm sm:text-lg text-textdark py-4">
            Experience a Simple and Efficient Job Search: From Browsing Listings
            to Applying for Positions, Discover How Our Platform Streamlines
            Your Journey
          </p>
          <div className="wrapper">
            <ol className="c-stepper">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`c-stepper__item ${
                    currentStep === index + 1 ? "active" : ""
                  }`}
                  data-step={index + 1}
                  onClick={() => setCurrentStep(index + 1)}
                >
                  <div className="c-stepper__content">
                    <h3 className="c-stepper__title">{step.title}</h3>
                    <p className="c-stepper__desc" style={{ lineHeight: 1.4 }}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image
              src={steps[currentStep - 1].image}
              width={500}
              height={500}
              alt="bannerImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageC;
