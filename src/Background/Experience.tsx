import { useState } from "react";

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
  const [selection, setSelection] = useState(0)

  function handleCount(countInt: number){
    console.log(selection)
    if(selection == jobs.length - 1){
      setSelection(0)
    }else{
      setSelection(selection + countInt)
    }
  }

  return (
    <div
      title="skills-information"
      className="flex-1 bg-blue-100 text-blue-900 rounded-2xl shadow-md p-6 max-w-xl"
    >
      <h1 className="font-bold text-xl text-center border-b-2 border-blue-300 pb-2">
        Experience
      </h1>
      <div className="leading-relaxed">
        <h1>{jobs[selection].company}</h1>
        <div>
          <p className="text-lg font-semibold">Quality Engineer II</p>
          • Write automation tests with Cypress and Karate <br />
          • Triage daily automation run failures <br />• Fix minor bugs on the
          frontend and help maintain code base
        </div>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
          onClick={() => handleCount(1)}
        >
  {/* You can place an icon inside, like a left or right arrow */}
</button>
      </div>
    </div>
  );
}

export default Experience;
