"use client";
import React from "react";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

const SocialMediaSidebar = () => {
  const links = [
    {
      icon: <FaSquareGithub className="w-8 h-8 text-neutral-950 hover:text-gray-700" />,
      href: "https://github.com/shubhamprajapati18",
      label: "LinkedIn",
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-neutral-950 hover:text-blue-600" />,
      href: "https://www.linkedin.com/in/shubhamprajapati18/",
      label: "LinkedIn",
    },
    {
      icon: <FaSquareXTwitter className="w-8 h-8 text-neutral-950 hover:text-black" />,
      href: "https://x.com/SPrajapati16222",
      label: "Twitter/X",
    },
    {
      icon: <FaSquareInstagram className="w-8 h-8 text-neutral-950 hover:text-pink-500" />,
      href: "https://www.instagram.com/shubham.prajapati18/",
      label: "Instagram",
    }
  ];

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-lime-500  shadow-md flex flex-col  items-center gap-6 py-6 px-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="transition-transform duration-200 hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSidebar;
