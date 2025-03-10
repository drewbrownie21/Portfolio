import { useState } from "react";
import Button from "./Button";

function Experience(){
    const [isExperienceSelected, setIsExperiencedSelected] = useState(false)

    return(
        <div className='experience-information ml-20 mt-40'>
            <Button buttonText="Experience" isSelected={isExperienceSelected} onToggle={setIsExperiencedSelected} />
        </div>
    )
}

export default Experience;