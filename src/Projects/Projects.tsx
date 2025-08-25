import { forwardRef } from "react";
import yard from "../assets/yard.png";

const Projects = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <span
      ref={ref}
      className="flex flex-col items-center justify-center py-30 space-y-4"
    >
      <p className="text-xl font-semibold">Projects</p>
      <a href="https://drewbrownie21.github.io/yard-planner/">
        <img
          className="w-80 h-42 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
          src={yard}
          alt="Yard Project"
        />
      </a>
    </span>
  );
});

export default Projects;
