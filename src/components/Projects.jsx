
import PhotoGallery from "./PhotoGallery";

const projects = [
  {
    title: "Smart Walker Assistance",
    objective:
      "To develop an intelligent smart-walker assistance system that enhances user safety through fall detection, real-time location tracking, emergency alerts, and assisted navigation, while enabling remote monitoring through a Flutter-based mobile application.",

    implementations: [
      "Developing an embedded safety system using Arduino UNO Q and M5Stack Tab5, integrating IMU-based fall detection, GNSS tracking, and LTE/SMS emergency communication.",

      "Implementing real-time sensing, emergency alert mechanisms, and assisted navigation functionalities to improve user safety and mobility.",

      "Developed a Flutter-based mobile application to display real-time walker status, GPS location, fall detection alerts, and SOS notifications.",

      "Integrating embedded hardware and mobile application functionalities to enable remote safety monitoring and coordinated emergency response.",
    ],

    photos: [],
    videos: [],
  },

  {
    title: "PLC-Controlled Pneumatic Automation",
    objective:
      "To develop and validate a PLC-controlled pneumatic automation system for sequential workpiece handling, positioning, clamping, and multi-stage drilling operations using Siemens S7 PLCs and Ladder Logic.",

    implementations: [
      "Developed sequential PLC programs using Siemens S7 and Ladder Logic (KOP) to automate pneumatic actuator movements and workpiece handling operations.",

      "Implemented sensor-based actuator sequencing using digital I/O mapping, Set/Reset logic, timers, and intermediate positioning for reliable and repeatable operation.",

      "Programmed advanced automation sequences involving dual drilling operations, multi-position workpiece transport, timed delays, automatic cycle repetition, and production counting.",

      "Tested and validated control sequences on a physical Bosch pneumatic training setup, verifying sensor feedback, actuator movements, and correct signal flow.",
    ],

    photos: [
      {
        name: "Siemens PLC",
        caption: "Siemens PLC-Controlled Pneumatic Automation",
      },
    ],

    videos: [],
  },

  {
    title: "Vision-Guided Delta Robot System",
    objective:
      "To develop a vision-guided robotic pick-and-place system integrating machine vision, PLC control, and Delta robot motion for automated object detection and handling.",

    implementations: [
      "Integrated machine vision with a B&R X20 PLC for real-time X-Y object localization and robot target generation.",

      "Programmed Delta robot motion sequences and pneumatic vacuum gripping for automated object handling.",

      "Established communication between the vision system and PLC to coordinate object localization and robot operation.",

      "Tested and validated the complete automated pick-and-place sequence on a physical robotic automation cell.",
    ],

    photos: [
      {
        name: "Delta Robot",
        caption: "Vision-Guided Delta Robot System",
      },
    ],

    // Delta Robot YouTube Video
    videos: [
      {
        title: "Vision-Guided Delta Robot - Pick-and-Place Demonstration",
        url: "https://www.youtube.com/shorts/Zqpzdk3B2fA",
      },
    ],
  },

  {
    title: "Waypoint-Based Programming of a Universal Robot Assembly Task",
    objective:
      "To develop and validate an automated robotic assembly sequence using a Universal Robots collaborative manipulator, employing PolyScope teach pendant programming and waypoint-based motion control for precise and repeatable component picking, transfer, alignment, and insertion.",

    implementations: [
      "Programmed automated robotic assembly sequences using the PolyScope teach pendant, defining taught waypoints for component picking, transfer, alignment, insertion, and return positioning.",

      "Configured MoveJ (joint-space) and MoveL (Cartesian linear) motion sequences, including approach and retraction waypoints, to achieve controlled and repeatable robotic manipulation.",

      "Configured Tool Center Point (TCP) settings to establish accurate end-effector positioning and orientation during component handling and assembly.",

      "Integrated robotic gripper control through digital I/O, synchronizing gripping and release operations with the programmed robot motion sequence.",

      "Tested and validated the complete assembly cycle on a physical Universal Robots collaborative manipulator, verifying waypoint accuracy, motion sequencing, gripping, insertion, and return positioning.",
    ],

    photos: [
      {
        name: "UR Robot",
        caption: "Universal Robots - Automated Assembly",
      },
    ],

    // Universal Robots YouTube Video
    videos: [
      {
        title: "Universal Robots - Waypoint-Based Robotic Assembly Demonstration",
        url: "https://www.youtube.com/shorts/O7pAD_y4nMI",
      },
    ],
  },

  {
    title: "Two-Dimensional Pen Plotter",
    objective:
      "To design and develop a high-precision XY pen plotter capable of reproducing detailed architectural drawings through coordinated mechanical movement and programmed motion control.",

    implementations: [
      "Designed custom mechanical components using CAD software and fabricated them through 3D printing.",

      "Integrated mechanical, electronic, and software subsystems following the V-model development methodology.",

      "Conducted programming, debugging, motion calibration, and functional testing to improve drawing precision and repeatability.",

      "Tested the plotter by reproducing architectural drawings of Nicolaus House.",
    ],

    photos: [],
    videos: [],
  },

  {
    title: "Anomaly Detection for Predictive Maintenance",
    objective:
      "To develop a data-driven predictive maintenance system capable of detecting abnormal equipment behavior through sensor data analysis, supporting early fault identification and improved machine reliability.",

    implementations: [
      "Developed a predictive maintenance workflow using Python and Jupyter Notebook to analyze sensor data from a mechatronic system.",

      "Implemented anomaly detection techniques to identify deviations from normal operating conditions.",

      "Processed and visualized sensor measurements to examine equipment behavior and detect abnormal patterns.",

      "Analyzed the detected anomalies to support early fault identification and maintenance decision-making.",
    ],

    photos: [],
    videos: [],
  },

  {
    title: "Dosing Machine PLC Project",
    objective:
      "To design and simulate an automated PLC-controlled dosing machine with HMI visualization for coordinated material transportation, dosing, mixing, and motor control.",

    implementations: [
      "Developed PLC control logic for automated material handling and dosing operations using LD, FBD, and CFC programming approaches.",

      "Created an interactive HMI with animated silos, spiral conveyors, mixers, and motor status indicators.",

      "Integrated control variables for start/stop commands, motor operation, and material-level visualization.",

      "Implemented Finite State Machine (FSM) and trigger-based sequencing to coordinate the dosing and mixing processes.",
    ],

    photos: [],
    videos: [],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col bg-mass-icon bg-no-repeat bg-cover items-center px-6 py-12 mx-auto sm:px-10 lg:px-14"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center max-lg:text-2xl max-sm:text-xl">
        Projects
      </h2>

      <div className="w-full max-w-4xl mt-10 max-lg:mt-5">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`py-8 max-sm:py-5 ${
              index !== 0
                ? "border-t border-gray-300"
                : ""
            }`}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-left underline max-lg:text-lg max-sm:text-base">
              {project.title}
            </h3>

            {/* Objective */}
            <div className="mt-4 max-sm:mt-3">
              <p className="text-lg font-normal text-gray-950 leading-relaxed max-lg:text-sm max-sm:text-xs">
                <strong>Objective:</strong>{" "}
                {project.objective}
              </p>
            </div>

            {/* Key Implementations */}
            <div className="mt-4 max-sm:mt-3">
              <h4 className="text-lg font-bold text-gray-950 max-lg:text-sm max-sm:text-xs">
                Key Implementations:
              </h4>

              <ul className="list-disc pl-5 mt-2 space-y-3 text-lg font-normal text-gray-950 leading-relaxed max-lg:text-sm max-sm:text-xs max-sm:space-y-2">
                {project.implementations.map(
                  (implementation, i) => (
                    <li key={i}>
                      {implementation}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Project Photos and YouTube Videos */}
            {(project.photos.length > 0 ||
              project.videos.length > 0) && (
              <div className="mt-6">
                <PhotoGallery
                  photos={project.photos}
                  videos={project.videos}
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

export default Projects;
