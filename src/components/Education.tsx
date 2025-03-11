import { useState } from "react";
import Button from "./Button";

function Education() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="university-information ml-20">
      <Button
        buttonText={"Education"}
        isSelected={buttonClick}
        onToggle={setButtonClick}
      />
      <div
        className={`mt-2 transition-all duration-300 ${
          buttonClick
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
