import Button from "../components/Button";

interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectsButton({ projectsRef }: HeaderProps) {
  return (
    <article>
      <Button
        buttonText={"Projects"}
        name="projects"
        projectsRef={projectsRef}
      />
    </article>
  );
}

export default ProjectsButton;
