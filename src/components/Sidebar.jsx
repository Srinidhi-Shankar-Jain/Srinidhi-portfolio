import { BiHome } from "react-icons/bi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbSettingsBolt } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import "/src/App.css";
import { Button } from "react-scroll";
import { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const downloadResume = () => {
    const fileUrl = "/Srinidhi Shankar Jain-CV.pdf";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Srinidhi Shankar Jain-CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/srinidhi-shankarjain/", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/s.r.i.n.i.d.h.i_s", "_blank");
  };

  const openGmail = () => {
    const emailAddress = "srinidhi.s131@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/Srinidhi-shankar-jain", "_blank");
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="p-5 flex justify-center flex-col items-center bg-map-image">
          <img
            src="/AboutMe_profile.jpg"
            className="w-36 h-36 rounded-full object-cover"
          />
          <span className="text-xl font-serif font-semibold text-600 pt-5">
            Srinidhi Shankar Jain
          </span>
          <div>
            <h1 className="animate-typing overflow-hidden pt-3 whitespace-nowrap border-r-4 border-r-black pr-0 text-sm text-gray-500 font-medium">
              {"Mechatronics Engineer..."}
            </h1>
          </div>
        </div>
        <Button
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "home" ? "active" : ""} w-full flex p-4 pl-5 px-8 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BiHome className="text-xl text-gray-600 font-extralight" />
          <span>Home</span>
        </Button>
        <Button
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "about" ? "active" : ""} w-full flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <PiUserCircleDuotone className="text-xl text-gray-600 font-extralight" />
          <span>About</span>
        </Button>
        <Button
          to="skills"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "skills" ? "active" : ""} w-full flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <TbSettingsBolt className="text-xl text-gray-600 font-extralight" />
          <span>Skills</span>
        </Button>
        <Button
          to="work-experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "work-experience" ? "active" : ""} w-full flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BsSpeedometer2 className="text-xl text-gray-600 font-extralight" />
          <span>Work Experience</span>
        </Button>
        <Button
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "projects" ? "active" : ""} w-full flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <FaProjectDiagram className="text-xl text-gray-600 font-extralight" />
          <span>Projects</span>
        </Button>
        <Button
          onClick={downloadResume}
          className="flex p-4 pl-5 px-8 w-full border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium"
        >
          <IoMdDownload className="text-xl text-gray-600 font-extralight" />
          <span>Download Resume</span>
        </Button>
        <Button
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
          className={`${activeLink === "contacts" ? "active" : ""} w-full flex p-4 pl-5 px-8 border-t-0 items-center gap-4 text-sm border text-gray-900 border-x-0 hover:text-blue-700 hover:bg-gray-100 cursor-pointer font-medium`}
        >
          <BiSolidContact className="text-xl text-gray-600 font-extralight" />
          <span>Contact</span>
        </Button>
        <div className="flex items-center justify-center flex-col gap-6 pt-10">
          <div className="flex gap-3 text-xl cursor-pointer">
            <AiFillLinkedin
              tabIndex={0}
              onClick={openLinkedIn}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openLinkedIn();
                }
              }}
            />
            <AiFillGithub
              tabIndex={0}
              onClick={openGithub}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openGithub();
                }
              }}
            />
            <BsInstagram
              tabIndex={0}
              onClick={openInstagram}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openInstagram();
                }
              }}
            />
            <BiLogoGmail
              tabIndex={0}
              onClick={openGmail}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  openGmail();
                }
              }}
            />
          </div>
          <span className="text-xs font-serif text-gray-600">
            Copyright © {new Date().getFullYear()} Srinidhi S
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
