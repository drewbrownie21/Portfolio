import Button from "../components/Button";

interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectsButton({ projectsRef }: HeaderProps) {
  return (
    <div>
      <Button
        buttonText={"Projects"}
        name="projects"
        projectsRef={projectsRef}
      />
    </div>
  );
}

export default ProjectsButton;
