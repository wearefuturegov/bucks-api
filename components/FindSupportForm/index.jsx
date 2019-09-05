import React, { useState } from "react"
import InterestsQuestion from "./InterestsQuestion"
import SupportQuestion from "./SupportQuestion"
import LocationQuestion from "./LocationQuestion"
import Button from "../Button"

const Form = () => {
    const [support, setSupport] = useState(false)
    
    return(
        <form method="get" action="/recommendations">
            <InterestsQuestion support={support} setSupport={setSupport}/>
            {support && <SupportQuestion/>}
            <LocationQuestion support={support}/>
            <Button type="submit">See recommendations</Button>
        </form>
    )
}

export default Form