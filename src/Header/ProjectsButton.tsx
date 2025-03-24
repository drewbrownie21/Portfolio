import Button from "../components/Button";
import { useState } from "react";

interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectsButton({ projectsRef }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("");

  console.log(activeSection);

  return (
    <div>
      <Button
        buttonText={"Projects"}
        name="projects"
        activeState={activeSection}
        onToggle={setActiveSection}
        projectsRef={projectsRef}
      />
    </div>
  );
}

export default ProjectsButton;
