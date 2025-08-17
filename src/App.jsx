import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex relative">
      <div className="w-1/5 max-lg:hidden h-screen shadow-xl fixed">
        <Sidebar />
      </div>
      <div
        style={{ left: "20%" }}
        className="w-4/5 max-lg:w-full h-full relative max-lg:!left-0"
      >
        <div className="h-screen max-lg:h-56 bg-office-background bg-no-repeat bg-cover relative">
          <div
            className="h-full inset-0 bg-black opacity-50 relative"
            style={{ zIndex: 1 }}
          />
          <div className="relative">
            <img
              src="/wave.png"
              style={{ zIndex: 2 }}
              className="w-full absolute -bottom-px object-fill"
            />
          </div>
          <div className="relative">
            <Home />
          </div>
        </div>
        <div className="relative">
          <AboutMe />
        </div>
        <div className="relative">
          <Skills />
        </div>
        <div className="relative">
          <Experience />
        </div>
        <div className="relative">
          <Projects />
        </div>
        <div className="relative">
          <Contact />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
