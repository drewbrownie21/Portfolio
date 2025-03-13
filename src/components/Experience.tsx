import Button from "./Button";

type ExperienceProps = {
  activeSection: string;
  setActiveSection: (newState: string) => void;
};

function Experience({ activeSection, setActiveSection }: ExperienceProps) {
  return (
    <div className="experience-information">
      <Button
        buttonText={"Experience"}
        name="experience"
        activeState={activeSection}
        onToggle={setActiveSection}
      />
      <div
        className={`mt-2 transition-all duration-300 ${
          activeSection == "experience"
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <h1>Quality Engineer - Ridgeline - March 2024 to Present</h1>
      </div>
    </div>
  );
}

export default Experience;
