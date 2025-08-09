import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect.jsx";

const Skills = () => {
  const projects = [
    {
      title: "Python",
      description:
        "Strong in writing clean, efficient scripts, automation, and data handling.",
      link: "https://python.org",
    },
    {
      title: "Java Script",
      description:
        "Skilled in creating interactive, responsive, and dynamic web applications.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "Mern Stack",
      description:
        "Capable of building full-stack applications using MongoDB, Express, React, and Node.js.",
      link: "https://www.mongodb.com/resources/languages/mern-stack-tutorial?msockid=15b1caa2d5f1691502c2dce0d4036859",
    },
    {
      title: "SQL",
      description:
        "Experienced in designing, querying, and managing relational databases.",
      link: "https://dev.mysql.com/doc/",
    },
    {
      title: "Farmer & Figma",
      description:
        "From fields to interfaces, uniting practical know-how with creative design.",
      link: "https://www.figma.com/",
    },
    {
      title: "Docker",
      description:
        "Able to containerize applications for smooth deployment and scalability.",
      link: "https://www.docker.com/",
    },
  ];

  return (
    <div className="border border-neutral-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10 ml-0 sm:ml-4 md:ml-9 mb-8">
        <h2 className="michroma-font text-lg sm:text-3xl md:text-5xl lg:text-7xl mb-4 text-black dark:text-white max-w-4xl">
          Skills .
        </h2>
        <p className="mozilla-headline-font text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-sm">
          "Skills are the tools, creativity is the art — together, they build
          greatness."
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
        <HoverEffect items={projects} />
      </div>

      <div className="flex items-center justify-center h-auto sm:h-20 px-4 text-center">
        <p className="text-sm sm:text-md text-neutral-600 hover:text-white">
          "⚡ Improving every day — tech evolves, so do I ⚡"
        </p>
      </div>
    </div>
  );
};

export default Skills;
