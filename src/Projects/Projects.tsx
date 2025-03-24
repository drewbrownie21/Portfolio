import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex items-center justify-center py-30">
      Projects! Under Construction...
    </div>
  );
});

export default Projects;