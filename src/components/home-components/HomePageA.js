import { HiOutlineBriefcase, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import HomeImg from "./HomeImg";

const HomePageA = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative px-4 sm:px-20 py-8">
      <div className="flex">
        <HomePageHeading />
      </div>
      <HomeImg />
    </div>
  );
};

const HomePageHeading = () => {
  return (
    <div className="mt-40">
      <h4 className="font-semibold text-textdark tracking-wider">
        WE HAVE 50+ LIVE JOBS
      </h4>
      <h1 className="text-4xl md:text-7xl font-bold space-x-4">
        <span className="text-textdark">Find your dream jobs with</span>
        <span className="text-primary">SK job solution</span>
      </h1>
      <p className="text-lg text-textdark py-8">
        Connecting Ambitious Professionals with Leading Companies, Unlocking
        Exciting Career Opportunities, and Empowering Your Journey to Success in
        the Dynamic Job Market. Explore a Diverse Range of Roles Across Various
        Industries, and Take the Next Step Towards Achieving Your Career
        Aspirations with SK job solution s Expertise and Support.
      </p>
      <JobSearch />
    </div>
  );
};

const JobSearch = () => {
  return (
    <div className="rounded-xl flex lg:items-center text-xl  flex-col sm:flex-row overflow-hidden shadow-lg">
      <div className="flex py-2.5 px-5 items-center bg-white w-full gap-2">
        <HiOutlineBriefcase size={32} color="#766DF4" />
        <input
          type="text"
          className="outline-none"
          placeholder="Job, Company name"
        />
      </div>
      <button className="py-2.5 px-5 bg-primary hover:bg-indigo-700 flex text-white">
        <span className="flex gap-1 items-center">
          <HiOutlineMagnifyingGlass color="white" size={32} />
          <span className="min-w-max">Find Job</span>
        </span>
      </button>
    </div>
  );
};

export default HomePageA;
