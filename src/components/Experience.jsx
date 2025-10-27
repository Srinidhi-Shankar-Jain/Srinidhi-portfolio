function Experience() {
  return (
    <>
      <div
        id="work-experience"
        className="h-full w-full flex flex-col bg-map-image bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0 "
      >
        <span className="text-4xl max-lg:text-2xl font-bold max-sm:text-xl">
          Work Experience
        </span>
        <div className="w-4/5">
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span className="">Revo Foods Gmbh</span>
              <span>September 2024 - February 2025</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Mechatronics Engineering Intern
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Design and 3D printing of a housing, as well as development of a motor test station for simultaneous testing of stepper and servo motors.`}
                </li>
                <li>
                  {`Conducted research on Siemens Sinumerik and other automation systems; created schematic diagrams with Draw.io to support system upgrades.`}
                </li>
                <li>
                  {`Developed a virtual factory environment using Factory I/O to test PLC code and validate conveyor and machine operations.`}
                </li>
                <li>
                  {`Researched and evaluated actuators compatible with Profibus and Profinet; analyzed safety standards and sustainability of components.`}
                </li>
                <li>
                  {`Collaborated with the R&D team to select and integrate food-safe materials and electronics, ensuring compliance with food safety standards while maintaining a sustainable production model.`}
                </li>
              </ul>
            </div>
          </div>
          
        
        </div>
      </div>
    </>
  );
}

export default Experience;
