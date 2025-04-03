import Skills from "./Skills";
import Experience from "./Experience";

function Background() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-6xl mx-auto h-90">
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default Background;
