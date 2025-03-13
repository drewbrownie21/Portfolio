import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
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
  );
}

export default App;
