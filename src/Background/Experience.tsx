const jobs = [
  {
    company : "Ridgeline",
    jobTitle: "Quality Engineer II",
    duties: [
      "Write automation tests with Cypress and Karate",
      "Triage daily automation run failures",
      "Fix minor bugs on the frontend and help maintain code base"
    ]
  },
  {
    company : "School Pathways",
    jobTitle: "Software Test Engineer",
    duties: [
      "Created automated test suite utilizing Cypress and Selenium",
      "Wrote API-level tests using Python and pytest",
      "Reduced deploy test time 86%, improving efficiency and accelerating the release cycle through automated testing."
    ]
  }
]

function Experience() {
  return (
    <div
      title="skills-information"
      className="flex-1 bg-blue-100 text-blue-900 rounded-2xl shadow-md p-6 max-w-xl"
    >
      <h1 className="font-bold text-xl text-center border-b-2 border-blue-300 pb-2">
        Experience
      </h1>
      <div className="leading-relaxed">
        <h1>Ridgeline</h1>
        <div>
          <p className="text-lg font-semibold">Quality Engineer II</p>
          • Write automation tests with Cypress and Karate <br />
          • Triage daily automation run failures <br />• Fix minor bugs on the
          frontend and help maintain code base
        </div>
      </div>
    </div>
  );
}

export default Experience;
