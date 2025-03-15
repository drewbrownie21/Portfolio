import Button from "../components/Button";

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
    </div>
  );
}

export default Education;
