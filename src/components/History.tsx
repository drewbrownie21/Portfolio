import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";


function App(){
    const [activeSection, setActiveSection] = useState('')

    return(
        <div className="flex items-center justify-center">
            <Education />
            <Experience />
      </div>
    )
}

export default App;