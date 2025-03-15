import githubIcon from "../assets/github-mark.svg";
import Projects from "./Projects";

function Header() {
  return (
    <div>
      <Projects />
      <h1 className="absolute top-5 right-5">
        <a href="https://github.com/drewbrownie21">
          <img className="w-10 h-10" src={githubIcon} />
        </a>
      </h1>
    </div>
  );
}

export default Header;
