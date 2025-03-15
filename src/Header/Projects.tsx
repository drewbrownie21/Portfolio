import Button from "../components/Button";
import { useState } from "react";

function Projects() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
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
