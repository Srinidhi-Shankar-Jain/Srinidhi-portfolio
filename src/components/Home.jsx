import { Button } from "react-scroll";
import "/src/App.css";

function Home() {
  return (
    <>
      <div
        id="home"
        style={{ zIndex: 3 }}
        className="w-full h-screen max-lg:h-56 absolute bottom-0 object-fill flex items-center justify-center"
      >
        <div className="h-screen w-2/5 flex flex-col gap-4 items-center justify-center max-lg:hidden">
          <div className="text-white text-xl flex gap-2 items-center">
            <span>Hello, my name is </span>
            <span className="bg-gray-700 p-1 rounded whitespace-nowrap px-3 font-semibold">
              Srinidhi Shankar Jain
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-4xl text-white font-semibold whitespace-nowrap pt-3 pr-3">
              {`I'm a`}
            </span>
            <span className="text-4xl text-white font-semibold overflow-hidden pt-3 whitespace-nowrap pr-0">
              {` Skilled Mechatronics Engineering Graduate`}
            </span>
          </div>
          <div className="pt-5 flex gap-5">
            <Button
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-white p-2.5 px-5 active:bg-gray-200 text-black rounded-full font-medium cursor-pointer"
            >
              About Me
            </Button>
            <Button
              to="work-experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="bg-blue-700 p-2.5 px-5 active:bg-blue-500 text-white rounded-full font-medium cursor-pointer"
            >
              Work Experience
            </Button>
          </div>
        </div>
        <div className="h-full w-3/5 max-lg:-top-5 max-lg:absolute hidden flex-col gap-1 items-center justify-center max-lg:flex">
          <div className="text-white text-base flex gap-2 items-center">
            <span>Hello, my name is </span>
            <span className="bg-gray-700 p-0 rounded px-1 font-semibold">
              Srinidhi S
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-lg text-white font-semibold whitespace-nowrap pt-1 pr-1">
              {`I'm a`}
            </span>
            <span className="text-base animate-typing text-white font-semibold overflow-hidden pt-1 whitespace-nowrap border-r-4 border-r-black pr-0">
              {` Mechatronics Engineering Graduate`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
