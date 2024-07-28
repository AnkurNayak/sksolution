"use client";
// import AuthorImg from "@/assets/author.jpg";
import Image from "next/image";
import ContactSVG from "@/assets/contact.svg";
const AboutUs = () => {
  return (
    <div className="px-4 sm:px-20 py-8 mt-20 bg-white">
      <div className="p-4">
        <h1 className="text-xl md:text-4xl font-black text-textdark text-start mb-2">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-8 lg:py-0">
            <p className="mb-4">
              Welcome to our job posting platform! We are dedicated to
              connecting job seekers with opportunities across Assam. Whether
              you are searching for entry-level positions or senior roles, our
              platform strives to offer a diverse range of job listings to cater
              to your career aspirations.
            </p>
            <p className="mb-4">
              Our mission is to simplify the job search process for both
              employers and job seekers. For employers, we provide a reliable
              platform to reach qualified candidates efficiently. For job
              seekers, we offer a user-friendly interface to explore job
              opportunities and apply with ease.
            </p>
            <p className="mb-4">
              At SK Job Solution, we value transparency, professionalism, and
              efficiency. We aim to foster a community where employers can find
              the right talent and job seekers can discover fulfilling career
              paths.
            </p>
            <p className="mb-4">
              Thank you for visiting us. Whether you are an employer looking to
              hire or a job seeker seeking new opportunities, we are here to
              support you in your journey.
            </p>
            <p className="font-semibold italic mb-4">- SK JOB SOLUTION</p>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <span className="mb-4">
              Have questions or feedback? Feel free to reach out to us at{" "}
              <p className="text-blue-600 hover:underline">owner@mail.com</p> or
              call us at{" "}
              <p className="text-blue-600 hover:underline">+1 (234) 567-890</p>.
            </span>
          </div>
          <div className="flex flex-col relative  order-first lg:order-last gap-2">
            <div className="flex w-full items-top justify-center">
              <div className="overflow-hidden flex items-center justify-center">
                <Image
                  src={ContactSVG}
                  alt="contact-img"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
