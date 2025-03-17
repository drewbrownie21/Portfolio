import Button from "../components/Button";
import { useState } from "react";

function ProjectsButton() {
  const [activeSection, setActiveSection] = useState("");

  console.log(activeSection);

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

export default ProjectsButton;
