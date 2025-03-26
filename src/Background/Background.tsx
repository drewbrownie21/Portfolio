import { useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";

function Background() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center">
        <Skills
        />
        <Experience
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}

export default Background;
