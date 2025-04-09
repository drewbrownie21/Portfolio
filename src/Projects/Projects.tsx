import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <span ref={ref} className="flex items-center justify-center py-30">
      🚧 Projects! Under Construction 🚧
    </span>
  );
});

export default Projects;
