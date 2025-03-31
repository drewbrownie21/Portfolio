import { useState } from "react";

type Jobs = {
  company: string;
  jobTitle: string;
  dateRange: string;
  duties: String[];
};

const jobs: Jobs[] = [
  {
    company: "Ridgeline",
    jobTitle: "Quality Engineer II",
    dateRange: "2024 - Current",
    duties: [
      "Write automation tests with Cypress and Karate.",
      "Triage daily automation run failures.",
      "Fix minor bugs on the frontend and help maintain code base.",
    ],
  },
  {
    company: "School Pathways",
    jobTitle: "Software Test Engineer",
    dateRange: "2021 - 2024",
    duties: [
      "Created automated test suite utilizing Cypress and Selenium.",
      "Wrote API-level tests using Python and pytest.",
      "Reduced deploy test time 86%, improving efficiency and accelerating the release cycle through automated testing.",
    ],
  },
  {
    company: "Scientifc Games",
    jobTitle: "Software Quality Assuance Engineer",
    dateRange: "2019 - 2021",
    duties: [
      "Tested games to ensure the final product was compliant and ready for field use.",
      "Developed and maintained the test process to have a comprehensive test plan.",
      "Automated and optimized the compliance submission process using Python scripts.",
    ],
  },
];

function Experience() {
  const [selection, setSelection] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function handleCount(countInt: number) {
    if (selection == jobs.length - 1) {
      setSelection(0);
    } else {
      setFlipped(!flipped)
      setSelection(selection + countInt);
    }
  }

  return (
    <div
      className="flex-1 bg-blue-100 text-blue-900 rounded-2xl shadow-md p-6 max-w-xl"
      onClick={() => handleCount(1)}

    >
      <h1 className="font-bold text-xl text-center border-b-2 border-blue-300 pb-2">
        Experience
      </h1>
      <div className="leading-relaxed">
        <h2 className="flex flex-row justify-between items-center mx-auto">
          <div className="text-left">{jobs[selection].company}</div>
          <div className="text-right">{jobs[selection].dateRange}</div>
        </h2>
        <div>
          <p className="text-lg font-semibold">{jobs[selection].jobTitle}</p>
        </div>
        <ul>
          {jobs[selection].duties.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
