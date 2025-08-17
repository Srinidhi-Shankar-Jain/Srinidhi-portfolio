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
              <strong>Mechanical & Mechatronics Engineering:</strong> CAD (Fusion 360, SolidWorks), FEA (ANSYS, SimScale), Mechanical Design, Motion Systems, Sensor Integration, Pneumatics & Actuators.
            </li>
            <li className="mt-2">
              <strong>Embedded Systems & Electronics:</strong> Arduino, Raspberry Pi, STM32 (ARM Cortex), BTT Octopus, Atmega328p, PCB Soldering & Debugging, I2C/SPI/UART, Power Supply Design (NDR, SDR series)
            
            </li>
            <li className="mt-2">
              <strong>Industrial Automation & Controls:</strong> Siemens SINUMERIK, PROFIBUS/PROFINET, PLCs (Basics), Servo & Stepper Motor Integration (T6 AC Servo, NEMA 23), Endstop & Proximity Sensors, Predictive Maintenance Concepts
            </li>
            <li className="mt-2">
              <strong>Programming & Scripting:</strong> Python (Data Logging, Automation), MATLAB (Control Systems, Signal Processing)
            </li>
            <li className="mt-2">
              <strong>3D Printing & Digital Manufacturing:</strong> FDM/FFF Printing, Bambu Studio, Slicing Optimization, 3D Printer Control Systems, Maintenance & Calibration, Revo Foods Custom Systems
            </li>
            <li className="mt-2">
              <strong>Data & Analysis Tools:</strong> Excel (Advanced), Zoho Books (Inventory, Marketplace Integration), Root Cause Analysis (RCA), Failure Mode Effects Analysis (FMEA)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
