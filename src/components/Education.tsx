import Button from "./Button";

type EducationProps = {
  activeSection: string;
  setActiveSection: (newState: string) => void;
};

function Education({ activeSection, setActiveSection }: EducationProps) {
  return (
    <div className="university-information">
      <Button
        buttonText={"Education"}
        name="education"
        activeState={activeSection}
        onToggle={setActiveSection}
      />
      <div
        className={`absolute transition-all duration-300 ${
          activeSection == "education"
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <h3>University of Nevada, Reno</h3>
        <p>Bachelor of Science in Electrical Engineering</p>
        <p>Minors in Unmanned Autonomous Systems and Mathematics</p>
      </div>
    </div>
  );
}

export default Education;
