"use client";
import React from "react";
import { Timeline } from "../components/ui/timeline.jsx";

const About = () => {
  const data = [
    {
      title: "2023 Onwards",
      content: (
        <div>
          <p className="mb-8 text-xs mozilla-headline-font font-bold text-neutral-800 md:text-5xl dark:text-lime-500">
            B.Tech, Computer Science & Engineering (Data Science)
          </p>
          <div className="gap-2 text-neutral-300 flex flex-col text-2xl">
            <p className="mozilla-headline-font">Buddha Institute of Technology, Gorakhpur</p>
            <p className="mozilla-headline-font"> Affiliated to : APJ Abdul Kalam Technical University, Luckhnow</p>
          </div>
          <div className="gap-1 text-neutral-500 flex flex-col text-lg mt-4">
            <p className="mozilla-headline-font">2nd Year</p>
            <p className="mozilla-headline-font">Specializing in Data Science and Machine Learning with a focus on practical applications.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2021-23",
      content: (
        <div>
          <p className="mb-8 text-xs mozilla-headline-font font-bold text-neutral-800 md:text-5xl dark:text-lime-500">
            Class 12th (Intermediate)
          </p>
          <div className="gap-2 text-neutral-300 flex flex-col text-2xl">
            <p className="mozilla-headline-font">Heritage Academy, Gorakhpur</p>
            <p className="mozilla-headline-font"> Affiliated to : CBSE</p>
          </div>
          <div className="gap-1 text-neutral-500 flex flex-col text-lg mt-4">
            <p className="mozilla-headline-font">Completed with distinction in PCM (Physics, Chemistry, Mathematics).</p>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="border-1 border-neutral-800 ">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default About;
