import React, { useState } from "react"
import InterestsQuestion from "./InterestsQuestion"
import SupportQuestion from "./SupportQuestion"
import LocationQuestion from "./LocationQuestion"
import Button from "../Button"

const Form = () => {
    const [support, setSupport] = useState(false)
    const [latLng, setLatLng] = useState([0,0])

    return(
        <form method="get" action="/recommendations">
            <InterestsQuestion
                support={support}
                setSupport={setSupport}
            />

            {support && <SupportQuestion/>}

            <LocationQuestion
                support={support}
                setLatLng={setLatLng}
            />

            <input type="hidden" name="lat" value={latLng[0]} readOnly/>
            <input type="hidden" name="lng" value={latLng[1]} readOnly/>

            <Button type="submit">See recommendations</Button>
        </form>
    )
}


export default Form