import { useState } from "react";

function Education(){
    const [buttonClick, setButtonClick] = useState(false);

    return(
        <div className='university-information'>
            <button
                className="font-bold bg-blue-700/75 hover:bg-slate-400/75 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setButtonClick(!buttonClick)}
            >
                Education
            </button>
            <div
                className={`mt-2 transition-all duration-300 ${
                    buttonClick ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
                }`}
            >
                <h3>
                    University of Nevada, Reno
                </h3>
                <p>
                    Bachelor of Science in Electrical Engineering
                </p>
                <p>
                    Minors in Unmanned Autonomous Systems and Mathematics
                </p>
            </div>
        </div>
    )
}

export default Education;