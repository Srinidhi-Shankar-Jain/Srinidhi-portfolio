
import "./App.css";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Awards from "./components/Awards";

function App() {
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div className="w-1/5 max-lg:hidden h-screen shadow-xl fixed">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        style={{ left: "20%" }}
        className="w-4/5 max-lg:w-full h-full relative max-lg:!left-0"
      >
        {/* Home */}
        <div className="h-screen max-lg:h-56 bg-office-background bg-no-repeat bg-cover relative">
          <div
            className="h-full inset-0 bg-black opacity-50 relative"
            style={{ zIndex: 1 }}
          />

          <div className="relative">
            <img
              src="/wave.png"
              alt=""
              style={{ zIndex: 2 }}
              className="w-full absolute -bottom-px object-fill"
            />
          </div>

          <div className="relative">
            <Home />
          </div>
        </div>

        {/* About Me */}
        <div className="relative">
          <AboutMe />
        </div>


        {/* Education */}
        <div className="relative">
          <Education />
        </div>

        {/* Work Experience */}
        <div className="relative">
          <Experience />
        </div>

        {/* Projects */}
        <div className="relative">
          <Projects />
        </div>

        {/* Awards */}
        <div className="relative">
          <Awards />
        </div>

        {/* Footer */}
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
