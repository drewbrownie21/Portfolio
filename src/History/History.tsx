import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center">
        <Education
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Experience
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="flex items-center justify-center py-20">
        <div
          className={`absolute transition-all duration-900 ${
            activeSection == "education"
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div>
            <h3>University of Nevada, Reno</h3>
            <p>Bachelor of Science in Electrical Engineering</p>
            <p>Minors in Unmanned Autonomous Systems and Mathematics</p>
          </div>
        </div>
        <div
          className={`absolute transition-all duration-900 ${
            activeSection == "experience"
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <h1>Quality Engineer - Ridgeline - March 2024 to Present</h1>
          <h2>Software Test Engineer - School Pathways</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
