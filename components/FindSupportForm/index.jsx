import React, {useState} from "react"
import InterestsQuestion from "./InterestsQuestion"
import SupportQuestion from "./SupportQuestion"
import LocationQuestion from "./LocationQuestion"

const Form = () => {
    const [support, setSupport] = useState(false)

    return(
        <form method="get" action="/recommendations">
            <InterestsQuestion
                support={support}
                setSupport={setSupport}
            />
            {support && <SupportQuestion/>}
            <LocationQuestion/>
            <button type="submit">See recommendations</button>
        </form>
    )
}


export default Form