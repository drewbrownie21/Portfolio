import { useState } from "react";
import Button from "../components/Button";

function BaseballSimMain() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <Button
        buttonText={"Baseball Sim"}
        name="baseball-sim"
        activeState={activeSection}
        onToggle={setActiveSection}
      />
    </div>
  );
}

export default BaseballSimMain;
