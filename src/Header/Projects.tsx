import Button from "../components/Button";
import { useState } from "react";

function Projects() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="absolute top-5 right-10">
      <Button
        buttonText={"Projects"}
        name="projects"
        activeState={activeSection}
        onToggle={setActiveSection}
      />
    </div>
  );
}

export default Projects;
