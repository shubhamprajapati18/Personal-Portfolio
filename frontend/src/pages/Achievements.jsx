import React from "react";
import certi1 from "../assets/certi1.png";
import certi2 from "../assets/certi2.jpg";
import certi3 from "../assets/certi3.jpeg";
import certi4 from "../assets/certi4.png";
import certi5 from "../assets/certi5.jpg";

const Achievements = () => {
  const items = [
    {
      title: "HCL-GUVI Hackathon 2025",
      description:
        "Built an AI-powered Resume Skill Extractor at AKTU AI Tech Confluence 2025 Hackathon — a great learning experience in real-world .",
      image: certi1,
    },
    {
      title: "2nd Place Win at the Web-Dev Hackathon",
      description:
        "🏆 Secured 2nd place in my college's Web-Dev Hackathon, acing the JavaScript round and creating a standout webpage design.",
      image: certi2,
    },
    {
      title: "From Code to Podium: My Web Designing Hackathon Journey",
      description:
        "🚀 Took part in my college’s annual Web Designing Hackathon, aced the JavaScript MCQ round, and built a creative webpage in the final challenge — proud to bag 2nd place and thankful to the organizers and faculty for their support.",
      image: certi3,
      wide: true,
    },
    {
      title: "IEEE Student Branch Member",
      description:
        "Member of my college’s IEEE Student Branch, engaging in tech events, networking, and innovation-driven activities.",
      image: certi4,
    },
    {
      title: "Top 30 Nationwide at StartUp Conclave",
      description:
        "Proud to have my idea selected among the top 30 across India at StartUp Conclave, organized by Delhi University.",
      image: certi5,
    },
  ];

  return (
    <div className="border border-neutral-800 px-4 sm:px-6 md:px-16 lg:px-24 pb-10">
      <div className="max-w-7xl mx-auto mb-12 mt-10 text-center md:text-left">
        <h2 className="michroma-font text-2xl sm:text-4xl md:text-7xl mb-4 text-black dark:text-white">
          Achievements .
        </h2>
        <p className="mozilla-headline-font text-neutral-700 dark:text-neutral-300 text-sm sm:text-base max-w-sm mx-auto md:mx-0">
          "Start small, dream big — every great project began with a single idea."
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-0 sm:px-6 md:px-10">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col justify-between border-6 hover:border-lime-500 border-neutral-100 bg-white shadow-sm hover:shadow-xl transition duration-200 dark:border-white/[0.2] dark:bg-black overflow-hidden ${
              item.wide ? "md:col-span-2" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full aspect-video">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8 transition duration-200 hover:translate-x-2">
              <div className="mozilla-headline-font mb-2 font-sans font-bold text-base sm:text-lg md:text-xl text-neutral-600 dark:text-lime-500">
                {item.title}
              </div>
              <div className="font-sans text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
