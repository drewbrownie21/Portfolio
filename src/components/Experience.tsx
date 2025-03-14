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
    </div>
  );
}

export default Experience;
