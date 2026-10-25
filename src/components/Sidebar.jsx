
import { useState } from "react";
import { Button } from "react-scroll";

import { BiHome, BiLogoGmail } from "react-icons/bi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";

import {
  FaProjectDiagram,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "/src/App.css";

// Sidebar Navigation
const navigationLinks = [
  {
    to: "home",
    label: "Home",
    Icon: BiHome,
    offset: -100,
  },
  {
    to: "about",
    label: "About",
    Icon: PiUserCircleDuotone,
    offset: -100,
  },

  {
    to: "education",
    label: "Education",
    Icon: FaGraduationCap,
    offset: -50,
  },
  {
    to: "work-experience",
    label: "Work Experience",
    Icon: BsSpeedometer2,
    offset: -50,
  },
  {
    to: "projects",
    label: "Projects",
    Icon: FaProjectDiagram,
    offset: -50,
  },
  {
    to: "awards",
    label: "Awards",
    Icon: FaAward,
    offset: -50,
  },
];

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // Resume Download
  const downloadResume = () => {
    const fileUrl = "/Srinidhi Shankar Jain - Lebenslauf.pdf";

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Srinidhi Shankar Jain - Lebenslauf.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full h-full overflow-y-auto">

      {/* Profile Section */}
      <div className="p-5 flex flex-col justify-center items-center bg-map-image bg-no-repeat bg-cover">

        {/* Profile Picture */}
        <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200 shadow-md">
          <img
            src="/images/Pictures/AboutMe_profile.jpg"
            alt="Srinidhi Shankar Jain"
            className="w-full h-full object-cover object-center"
            onError={(event) => {
              const fallback = "/AboutMe_profile.jpg";

              if (!event.currentTarget.src.endsWith(fallback)) {
                event.currentTarget.src = fallback;
              }
            }}
          />
        </div>

        {/* Name */}
        <span className="text-xl font-serif font-semibold text-gray-900 pt-5 text-center">
          Srinidhi Shankar Jain
        </span>

        {/* Professional Title */}
        <div className="max-w-full">
          <h1 className="animate-typing overflow-hidden pt-3 whitespace-nowrap border-r-4 border-r-black pr-0 text-sm text-gray-500 font-medium">
            Mechatronics Engineer...
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Portfolio navigation">
        {navigationLinks.map(
          ({ to, label, Icon, offset }, index) => (
            <Button
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              onSetActive={handleSetActive}
              className={`
                ${activeLink === to ? "active" : ""}
                ${index !== 0 ? "border-t-0" : ""}
                w-full flex p-4 pl-5 px-8
                items-center gap-4 text-sm
                border border-x-0 text-gray-900
                hover:text-blue-700 hover:bg-gray-100
                cursor-pointer font-medium
                transition-colors duration-200
              `}
            >
              <Icon className="text-xl text-gray-600 font-extralight flex-shrink-0" />
              <span>{label}</span>
            </Button>
          )
        )}
      </nav>

      {/* Download Resume */}
      <button
        type="button"
        onClick={downloadResume}
        className="
          flex p-4 pl-5 px-8 w-full
          border border-t-0 border-x-0
          items-center gap-4 text-sm text-gray-900
          hover:text-blue-700 hover:bg-gray-100
          cursor-pointer font-medium
          transition-colors duration-200
        "
      >
        <IoMdDownload className="text-xl text-gray-600 flex-shrink-0" />
        <span>Download Resume</span>
      </button>

      {/* Social Media Section */}
      <div className="flex items-center justify-center flex-col gap-6 pt-10 pb-6">

        <div className="flex items-center justify-center gap-4 text-xl">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/srinidhi-shankarjain/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-700 transition-colors"
          >
            <AiFillLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Srinidhi-shankar-jain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-700 transition-colors"
          >
            <AiFillGithub />
          </a>

          {/* Gmail */}
          <a
            href="mailto:srinidhi.s131@gmail.com"
            aria-label="Send Email"
            className="hover:text-red-600 transition-colors"
          >
            <BiLogoGmail />
          </a>

        </div>

        {/* Copyright */}
        <span className="text-xs font-serif text-gray-600 text-center">
          Copyright © {new Date().getFullYear()} Srinidhi S
        </span>

      </div>
    </div>
  );
}

export default Sidebar;
