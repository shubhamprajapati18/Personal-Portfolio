"use client";
import React, { useEffect, useRef } from "react";
import { BackgroundBeams } from "../components/ui/background-beams.jsx";
import Clock from "../components/shared/Clock.jsx";
import profileimg from "../assets/profileimg.jpg";
import projectHome1 from "../assets/projectHome1.png";
import projectHome2 from "../assets/projectHome2.png";
import { WobbleCard } from "../components/ui/wobble-card.jsx";

const Home = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 50 && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    const homeSection = document.getElementById("home");
    homeSection.addEventListener("wheel", handleScroll);

    return () => {
      homeSection.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const roles = [
    "Data Science Enthusiast",
    "B.Tech CSE (Data Science) Student",
    "Full Stack Developer",
    "Exploring Machine Learning",
  ];

  return (
    <div className="scroll-smooth">
      {/* 🔹 Home Section */}
      <section
        id="home"
        className="relative h-screen w-full bg-neutral-950 border-1  border-neutral-800 overflow-hidden"
      >
        {/* 🕒 Clock Positioned at Top-Right */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-lime-500 blink" />
          <span className="text-sm text-neutral-500">Delhi</span>
          <Clock />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex h-full flex-col lg:flex-row justify-center items-center gap-4 p-4">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 max-w-2xl p-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center lg:text-left font-sans font-semibold">
              Hi, I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-lime-400 to-lime-800 text-center lg:text-left font-sans font-bold">
              Shubham
            </h1>

            <div
              className="text-rotate-wrapper text-sm sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white 
             flex justify-center lg:justify-start text-center lg:text-left"
            >
              {roles.map((role, index) => (
                <div
                  className="text-rotate-item"
                  key={index}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {role}
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-neutral-500 mt-4 text-center lg:text-left">
              I build intelligent solutions with data and code. Passionate about
              data science, web development, and turning complex problems into
              elegant solutions.
            </p>
          </div>
        </div>

        <BackgroundBeams />
      </section>

      {/* 🔹 About Section with Circuit Pattern Background */}
      <section
        id="about"
        ref={aboutRef}
        className="h-screen w-full bg-black text-gray-500 relative border-1 border-neutral-800 px-8"
      >
        {/* 🔳 Slightly Brighter Circuit Pattern Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(156, 163, 175, 0.15) 19px, rgba(156, 163, 175, 0.15) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.15) 39px, rgba(156, 163, 175, 0.15) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(156, 163, 175, 0.15) 19px, rgba(156, 163, 175, 0.15) 20px, transparent 20px, transparent 39px, rgba(156, 163, 175, 0.15) 39px, rgba(156, 163, 175, 0.15) 40px),
        radial-gradient(circle at 20px 20px, rgba(156, 163, 175, 0.2) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(156, 163, 175, 0.2) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />

        {/* 🔲 Foreground Content */}
        <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          {/* Text Side */}

          <div className="flex-1 p-4">
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-5xl font-bold text-lime-600 whitespace-nowrap">
                  .about me
                </h2>
                <div className="h-1 w-full bg-lime-600 rounded" />
              </div>
            </div>
            <p className="text-lg font-medium text-gray-400">
              I'm Shubham Prajapati, a passionate tech enthusiast dedicated to
              creating smart, clean, and effective solutions using data and
              code. From frontend interfaces to backend logic, I love building
              projects that blend creativity with functionality.
            </p>
            {/* 🔗 About Page Link Bar */}
            <div className="mt-30 flex justify-center ">
              <a
                href="./about"
                className="px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
              >
                Explore More About Me →
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 flex justify-center items-center pl-6">
            <div className="w-[480px] h-[320px] bg-lime-600  shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={profileimg} // or "/images/profile.jpg"
                alt="My Profile"
                className="w-full h-full object-cover border-3 border-lime-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Project Section */}

      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen w-full bg-black text-white flex items-center justify-center border-1  border-neutral-800 px-8 py-16"
      >
        <div className="grid grid-cols-12 gap-6 w-full max-w-7xl">
          {/* First Row */}
          <div className="col-span-12 mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-5xl font-bold text-lime-600 whitespace-nowrap">
                .projects
              </h2>
              <div className="h-1 w-full bg-lime-600 rounded" />
            </div>
          </div>
          <WobbleCard
            containerClassName="col-span-12 lg:col-span-9 bg-pink-800 min-h-[300px] bg-lime-600"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Personal Portfolio Website
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                A visually polished and responsive personal portfolio built with
                React and Tailwind CSS, showcasing my tech stack, achievements,
                and projects in a clean and interactive layout.
              </p>
            </div>
            <img
              src={projectHome2}
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%]  -bottom-5 object-contain rounded-2xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-12 lg:col-span-3 min-h-[300px] bg-transparent">
            <p className="mt-4 max-w-[26rem] text-left text-2xl text-neutral-200">
              "Projects aren’t just code — they’re proof of passion,
              persistence, and purpose."
            </p>
          </WobbleCard>

          {/* Second Row - Full Width */}
          <WobbleCard containerClassName="col-span-12 bg-blue-900 min-h-[300px] bg-orange-600">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Skill Extractor Tool
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                A smart web app that lets users upload their resume,
                automatically extracts skills, and compares them with job
                requirements to check job compatibility. Built using React and
                powered by simple NLP techniques.
              </p>
            </div>
            <img
              src={projectHome1}
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-5 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </section>
      <div className="mt-0 flex justify-center mr-155">
        <a
          href="./projects"
          className="px-6 py-2 border-1 border-neutral-500 text-neutral-500 bg-transparent  transition-all duration-[200ms] hover:bg-white hover:text-black hover:-translate-y-2 transform"
        >
          More Projects Created By Me →
        </a>
      </div>
    </div>
  );
};

export default Home;
