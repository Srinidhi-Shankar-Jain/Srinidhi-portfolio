
import PhotoGallery from "./PhotoGallery";

const experiences = [
  {
    role: "Master Thesis Student",
    company: "Pilz GmbH & Co. KG and Hochschule Schmalkalden",
    location: "Schmalkalden, Germany",
    duration: "Feb 2026 - Sep 2026",

    description: [
      "Developed and tested a robotic pick-and-place system using CODESYS, CODESYS SoftMotion, and IEC 61131-3 Structured Text, including Cartesian motion sequences, conveyor handling, and automated pick/place logic.",

      "Built a machine-vision pipeline using Intel RealSense, Python, OpenCV, and VS Code for ROI-based workpiece detection, contour processing, localization, and orientation estimation.",

      "Implemented camera-to-robot calibration, converting image-space (u, v) coordinates into robot-space (X, Y, Z) coordinates and generating pose data for accurate robotic placement.",

      "Established raw TCP/IP socket communication between Python and CODESYS for real-time exchange of object-detection events, pose data, ROI status, and robot-control handshakes.",

      "Integrated and troubleshot robot, conveyor, digital I/O, magnetic gripping, and sensing, and used CODESYS Depictor to create a Digital Twin visualization, documenting validated operation, failure cases, and system limitations.",
    ],

    // Master's Thesis Photographs
    photos: [
      {
        name: "Pilz Robot with Conveyor",
        caption: "Robotic Workcell with Conveyor",
      },
      {
        name: "tcp",
        caption: "TCP/IP Communication",
      },
      {
        name: "Gripper Holder",
        caption: "Custom Gripper Holder",
      },
      {
        name: "Gripper",
        caption: "Robotic Gripper",
      },
      {
        name: "3D Printer",
        caption: "3D Printing",
      },
    ],

    // Master's Thesis YouTube Videos
    videos: [
    
      {
        title: "Pilz Master's Thesis - Complete System Demonstration",
        url: "https://www.youtube.com/watch?v=mTEB_yVtSZw",
      },
    ],
  },

  {
    role: "Mechatronics & Software Intern",
    company: "Revo Foods GmbH",
    location: "Vienna, Austria",
    duration: "Sep 2024 - Mar 2025",

    description: [
      "Designed and 3D-printed a custom housing, and engineered a motor test station enabling simultaneous performance testing of stepper and servo motors.",

      "Built a virtual factory simulation in Factory I/O to test and debug PLC code, validating conveyor belt operations and machine sequencing logic.",

      "Researched Siemens Sinumerik and other automation systems, and produced schematic diagrams in Draw.io to support planned system upgrades.",
    ],

    // Internship Photographs
    photos: [
      {
        name: "Internship",
        caption: "Internship at Revo Foods",
      },
      {
        name: "Internship Group Pic",
        caption: "Revo Foods Internship Team",
      },
      {
        name: "Tester",
        caption: "Motor Testing Station",
      },
    ],

    videos: [],
  },

  {
    role: "Operations Engineer",
    company: "Pro-Spec Performance Parts",
    location: "Bengaluru, India",
    duration: "Jan 2023 - Sep 2023",

    description: [
      "Integrated Amazon FBA (Fulfillment by Amazon) and Amazon MFN (Merchant Fulfilled Network) sales channels with Zoho Books and Zoho Inventory, automating inventory synchronization, order processing, and stock visibility.",

      "Used artificial intelligence-driven demand forecasting, Advanced Excel, and Material Requirements Planning to optimize production planning, stock replenishment, and inventory levels.",
    ],

    photos: [],
    videos: [],
  },
];

function Experience() {
  return (
    <section
      id="work-experience"
      className="w-full flex flex-col bg-map-image bg-no-repeat bg-cover items-center px-6 py-12 mx-auto sm:px-10 lg:px-14"
    >
      {/* Section Heading */}
      <h2 className="text-4xl max-lg:text-2xl max-sm:text-xl font-bold text-center">
        Work Experience
      </h2>

      <div className="w-full max-w-4xl mt-10 max-lg:mt-5">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="mb-10 pb-8 border-b border-gray-300 last:border-none"
          >
            {/* Role and Date */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 className="font-bold text-xl max-lg:text-lg max-sm:text-base">
                {experience.role}
              </h3>

              <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                {experience.duration}
              </span>
            </div>

            {/* Company */}
            <p className="text-blue-700 font-semibold text-base max-sm:text-sm mt-2">
              {experience.company}
            </p>

            {/* Location */}
            <p className="text-gray-600 text-sm mt-1">
              {experience.location}
            </p>

            {/* Experience Description */}
            <ul className="list-disc pl-5 mt-5 space-y-3 text-lg max-lg:text-sm max-sm:text-xs text-gray-950 leading-relaxed">
              {experience.description.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Photographs and YouTube Demonstrations */}
            {(experience.photos.length > 0 ||
              experience.videos.length > 0) && (
              <div className="mt-6">
                <PhotoGallery
                  photos={experience.photos}
                  videos={experience.videos}
                  contain={true}
                  showCaptions={true}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
