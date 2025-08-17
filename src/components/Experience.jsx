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
              Mechatronics & Software Engineering Intern
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Revo Foods Gmbh is a plant based seafoods producing company that uses advanced 3D food printing technology to produce vegan alternatives.`}
                </li>
                <li>
                  {`Troubleshot and optimized 3D printer control systems using ARM embedded systems, integrating stepper motors, T6 servo motors, drivers and sensors.`}
                </li>
                <li>
                  {`Designed 3D-printed case using Fusion 360, Bambu studio and developed a motor test station for simultaneous stepper and servo motor inspection.`}
                </li>
                <li>
                  {`Comprehensive research and review of actuators which are Profibus and Profinet compatible and further research on safety standards and sustainability of the components.Conducted research on Siemens Sinumerik and other automation systems, drawing a schematic diagram using Draw.io to support system upgrades and enhance production efficiency.`}
                </li>
                <li>
                  {`Collaborated with the R&D team to select and integrate food-safe materials and electronics, ensuring compliance with food safety standards while maintaining a sustainable production model.`}
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-b-gray-300 p-2 my-4 border-x-0 border-t-0 max-lg:p-0"></div>
          <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-4">
            <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
              <span>Pro-Spec Performance Parts</span>
              <span>January 2023 - July 2023</span>
            </div>
            <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
              Senior Operations Engineer
            </span>
            <div className="w-full">
              <ul
                style={{ listStyleType: "disc" }}
                className="text-lg font-normal text-gray-950 flex flex-col gap-2 mt-0 max-lg:text-sm max-sm:text-xs"
              >
                <li>
                  {`Streamlined daily operations by integrating demand forecasting with inventory optimization to minimize lead times and ensure an uninterrupted supply chain, leveraging advanced Excel and ERP systems for data-driven workflows.`}
                </li>
                <li>
                  {`Implemented the integration of Amazon MFN (Merchant Fulfilled Network) and FBA (Fulfilled by Amazon) marketplaces into Zoho Books, automating inventory synchronization, order management, and financial reporting. This ensured real-time stock visibility, seamless order processing, and accurate revenue tracking across multiple sales channels.`}
                </li>
                <li>
                  {`Implemented Just-in-Time (JIT) manufacturing and procurement processes by synchronizing material requirements planning (MRP) with supplier schedules, minimizing inventory holding costs.`}
                </li>
                <li>
                  {`Developed and standardized Product Life Cycle Management (PLM) principles for two distinct product families, ensuring efficient development, tracking, and end-of-life strategies.`}
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
