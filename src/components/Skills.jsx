function Skills() {
  return (
    <>
      <div
        id="skills"
        className="h-full w-4/5 flex flex-col bg-mass-icon items-center bg-contain bg-repeat p-10 max-lg:p-0 pt-12 m-8 mt-4 mb-10 mx-auto"
      >
        <span className="text-4xl font-bold text-center max-sm:text-xl max-lg:text-2xl">
          Skills
        </span>
        <div className="w-full flex flex-col gap-2 text-lg font-normal justify-between mt-12 max-lg:mt-4 max-sm:text-xs max-lg:text-sm max-lg:flex-col">
          <ul className="list-disc list-inside">
            <li>
              <strong>Mechanical & Mechatronics Engineering:</strong> CAD (Fusion 360, SolidWorks), MATLAB, Motion Systems, Sensor Integration, Pneumatics & Actuators.
            </li>
            <li className="mt-2">
              <strong>Embedded Systems & Electronics:</strong> Arduino, Raspberry Pi, STM32 (ARM Cortex), BTT Octopus, Atmega328p, PCB Soldering & Debugging.
            
            </li>
            <li className="mt-2">
              <strong>Industrial Automation & Controls:</strong> TwinCAT-Software Development, Siemens SINUMERIK, PROFIBUS/PROFINET, Basics of PLC Programming.
            </li>
            <li className="mt-2">
              <strong>Programming & Scripting:</strong> Python, C++, Java
            </li>
            <li className="mt-2">
              <strong>Language Proficiency:</strong> English (Native Speaker C1), German (Working Proficiency A2)
            </li>
            <li className="mt-2">
              <strong>Other Softwares:</strong> Microsoft Office Suite (Word, Excel, PowerPoint, Outlook), Zoho Books (Inventory, Marketplace Integration), Bambu Studio Software, Asana (Project management).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
