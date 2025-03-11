import { useState } from "react";
import Button from "./Button";

function Experience() {
  const [isExperienceSelected, setIsExperiencedSelected] = useState(false);

  return (
    <div className="experience-information ml-20 mt-40">
      <Button
        buttonText="Experience"
        isSelected={isExperienceSelected}
        onToggle={setIsExperiencedSelected}
      />
      <div
        className={`mt-2 transition-all duration-300 ${
          isExperienceSelected
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
