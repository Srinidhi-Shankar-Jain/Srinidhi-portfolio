
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="mb-5">

      {/* Top Divider */}
      <div className="border border-b-gray-300 p-2 border-x-0 border-t-0" />

      {/* Footer Content */}
      <div className="w-full bg-gray-50 min-h-32">

        <div className="flex items-center justify-center flex-col gap-6 pt-10 pb-6">

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-5 text-xl">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/srinidhi-shankarjain/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              <AiFillLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Srinidhi-shankar-jain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              <AiFillGithub />
            </a>

            {/* Gmail */}
            <a
              href="mailto:srinidhi.s131@gmail.com"
              aria-label="Send Email"
              className="text-gray-900 hover:text-red-600 transition-colors duration-200"
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
    </footer>
  );
}

export default Footer;
