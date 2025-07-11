import { useState } from "react";

type Jobs = {
  company: string;
  jobTitle: string;
  dateRange: string;
  duties: string[];
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
    company: "Scientific Games",
    jobTitle: "Software Quality Assurance Engineer",
    dateRange: "2019 - 2021",
    duties: [
      "Tested games to ensure the final product was compliant and ready for field use.",
      "Developed and maintained the test process to have a comprehensive test plan.",
      "Automated and optimized the compliance submission process using Python scripts.",
    ],
  },
];

function Experience() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="flex-1 w-full bg-blue-100 text-blue-900 rounded-2xl shadow-md p-6 overflow-hidden min-h-[300px]">
      <div className="flex flex-col justify-between h-full">
        {/* Slide Content */}
        <div>
          <h1 className="text-xl font-bold text-center border-b-2 border-blue-300 pb-2">
            Experience
          </h1>
          <div className="flex justify-between font-semibold mt-2">
            <span>{jobs[current].company}</span>
            <span>{jobs[current].dateRange}</span>
          </div>
          <p className="text-lg font-semibold mt-1">{jobs[current].jobTitle}</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            {jobs[current].duties.map((duty, idx) => (
              <li key={idx}>{duty}</li>
            ))}
          </ul>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {jobs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === current ? "bg-blue-600" : "bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
