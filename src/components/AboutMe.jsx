
function AboutMe() {
  // Contact Email
  const emailAddress = "srinidhi.s131@gmail.com";

  // Download Updated CV
  const downloadResume = () => {
    const fileUrl = "/Srinidhi Shankar Jain - Lebenslauf.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Srinidhi Shankar Jain - Lebenslauf.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-16
        sm:px-10
        lg:py-24
      "
    >
      {/* Centered About Me Content */}
      <div
        className="
          w-full
          max-w-3xl
          mx-auto
          flex
          flex-col
          items-center
          text-center
          gap-6
        "
      >
        {/* Section Heading */}
        <h2 className="text-4xl font-bold max-lg:text-2xl max-sm:text-xl">
          About Me
        </h2>

        {/* Professional Description */}
        <p
          className="
            text-base
            font-normal
            text-gray-600
            leading-8
            max-lg:text-sm
            max-sm:text-xs
            max-sm:leading-6
          "
        >
          Mechatronics Engineer with hands-on experience in industrial automation, PLC programming, robotics, machine vision, and digital-twin development. Experienced with CODESYS, IEC 61131-3 Structured Text, Python, OpenCV, TCP/IP communication, and vision-guided robotic systems. Skilled in integrating mechanical, electrical, control, and software components into complete automation solutions, with a strong interest in robotics, intelligent automation, and AI-based industrial applications.
        </p>

        {/* Divider */}
        <div className="w-full border-b border-gray-300" />

        {/* Personal Information */}
        <div
          className="
            w-full
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-12
            gap-y-4
            text-sm
            max-sm:text-xs
          "
        >
          {/* Name */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="font-semibold">
              Name:
            </span>

            <span className="text-gray-600 font-medium">
              Srinidhi Shankar Jain
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="font-semibold">
              Email:
            </span>

            <a
              href={`mailto:${emailAddress}`}
              className="
                text-blue-600
                hover:text-blue-800
                cursor-pointer
                underline
                font-medium
                break-all
              "
            >
              {emailAddress}
            </a>
          </div>
        </div>

        {/* Download Resume Button */}
        <button
          type="button"
          onClick={downloadResume}
          className="
            bg-blue-700
            hover:bg-blue-800
            active:bg-blue-500
            text-white
            rounded-full
            px-7
            py-3
            mt-2
            font-medium
            transition-colors
            duration-200
            max-sm:text-xs
          "
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
