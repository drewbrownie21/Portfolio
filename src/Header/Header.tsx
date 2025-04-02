import githubIcon from "../assets/github-mark.svg";
import linkedin from "../assets/linkedin.png";
import ProjectsButton from "./ProjectsButton";

interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

function Header({ projectsRef }: HeaderProps) {
  return (
    <div className="flex items-center justify-end py-2 px-2">
      <ProjectsButton projectsRef={projectsRef} />
      <div className="group">
        <div className="group-hover:animate-bounce transition-transform">
          <a href="https://github.com/drewbrownie21">
            <img className="w-10 h-10" src={githubIcon} />
          </a>
        </div>
      </div>
      <div className="group">
        <div className="group-hover:animate-bounce transition-transform">
          <a href="https://www.linkedin.com/in/andrew-b-028b8793/">
            <img className="w-12 h-10" src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
