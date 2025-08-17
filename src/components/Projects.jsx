function Projects() {
  return (
    <div
      id="projects"
      className="h-full w-full flex flex-col bg-mass-icon bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0"
    >
      <span className="text-4xl font-bold max-sm:text-xl max-lg:text-2xl">
        Projects
      </span>

      <div className="w-4/5">
        {/* First Project */}
        <div className="flex flex-col gap-2 justify-between mt-8 max-lg:mt-4">
          <div className="text-2xl font-semibold mb-1 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
            Two-Dimensional Pen Plotter
          </div>
          <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-sm:text-xs">
            <li>
              <strong>Objective:</strong> To design and develop a high-precision XY pen plotter that can reliably draw complex architectural drawings of Nicolaus House.
            </li>
            <li className="mt-1">
              <strong>Key Contributions:</strong>
              <ul className="list-disc text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs">
                <li>Designed and 3D-printed custom parts using CAD software.</li>
                <li>Conducted code testing, debugging, and calibration to ensure high-precision performance.</li>
                <li>Developed and implemented the V-model development process to integrate mechanical, electronic, and software components.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="border border-b-gray-300 p-2 my-1 border-x-0 border-t-0 max-lg:p-0"></div>

        {/* Second Project */}
        <div className="flex flex-col gap-2 justify-between mt-4 max-lg:mt-2">
          <div className="text-2xl font-semibold mb-1 text-left underline max-lg:text-base max-sm:text-sm max-lg:flex-col">
            Anomaly Detection for Predictive Maintenance
          </div>
          <ol className="list-none text-lg font-normal list-inside max-lg:text-sm max-sm:text-xs">
            <li>
              <strong>Objective:</strong> To design and develop a predictive maintenance system that detects anomalies in real-time, reducing downtime and improving operational efficiency.
            </li>
            <li className="mt-1">
              <strong>Key Contributions:</strong>
              <ul className="list-disc text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs">
                <li>Developed a predictive maintenance solution for a mechatronic system using Python and Jupyter Notebook, enabling early detection of potential failures.</li>
                <li>Implemented anomaly detection algorithms on sensor data, improving system reliability through proactive maintenance insights.</li>
                <li>Visualized and analyzed machine sensor patterns to identify abnormal behavior, enhancing understanding of operational risks.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Projects;
