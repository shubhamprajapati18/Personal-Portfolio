import React from "react";
import { Timeline } from "../components/ui/timelineproject.jsx";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import ats1 from "../assets/ats1.png";
import ats2 from "../assets/ats2.png";
import ats3 from "../assets/ats3.png";
import ats4 from "../assets/ats4.png";

const Projects = () => {
  const data = [
    {
      title: "BeUpdated : News Aggregator",
      content: (
        <div>
          <p className="mb-8 text-xs mozilla-headline-font font-bold text-neutral-800 md:text-xl dark:text-lime-500">
            Crafted a visually striking personal portfolio using React, Tailwind
            CSS, and Aceternity UI. Designed a seamless, modern interface to
            showcase skills and projects with elegant animations and cool
            mordern designs.
          </p>

          <div className="gap-2 text-neutral-300 flex flex-col text-lg">
            <p className="mozilla-headline-font text-neutral-500">July 2025</p>
            <p className="mozilla-headline-font">
              <span className="text-neutral-500 ">Tech Stack :</span>
              <span className="text-amber-400 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                JS
              </span>
              <span className="text-sky-500 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                React
              </span>
              <span className="text-teal-600 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                Tailwind CSS
              </span>
              <span className="text-slate-400 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                Aceternity UI
              </span>
            </p>
            <div className="mt-2 mb-2">
              <a
                href="./projects"
                className="px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
              >
                GitHub Repo →
              </a>
              <a
                href="./projects"
                className="ml-5 px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
              >
                Visit Website →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={portfolio1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-100 rounded-lg  object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={portfolio2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg  object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Resume Tracking System",
      content: (
        <div>
          <p className="mb-8 text-xs mozilla-headline-font font-bold text-neutral-800 md:text-xl dark:text-lime-500">
            Developed a smart web app for automated skill extraction from
            resumes. Enabled real-time compatibility checks against job
            requirements using React, Node.js, and Express.
          </p>
          <div className="gap-2 text-neutral-300 flex flex-col text-lg">
            <p className="mozilla-headline-font text-neutral-500">March 2025</p>
            <p className="mozilla-headline-font">
              <span className="text-neutral-500 ">Tech Stack :</span>
              <span className="text-amber-400 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                JS
              </span>
              <span className="text-sky-500 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                React
              </span>
              <span className="text-lime-600 cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1 px-2 py-1 ">
                NodeJS
              </span>
              
            </p>
            <div className="mt-2 mb-2">
              <a
                href="https://github.com/shubhamprajapati18/TalentTagger-GUVI-HCL-Hackathon"
                className="px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
              >
                GitHub Repo →
              </a>
              <a
                href="https://talent-tagger.netlify.app/"
                className="ml-5 px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
              >
                Visit Website →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ats1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={ats2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={ats3}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={ats4}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-black dark:text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="border-1 border-neutral-800 ">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Projects;
