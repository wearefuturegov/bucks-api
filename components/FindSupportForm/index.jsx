import React from "react"
import InterestsQuestion from "./InterestsQuestion"
import SupportQuestion from "./SupportQuestion"
import LocationQuestion from "./LocationQuestion"

const Form = () =>
    <form>

        <InterestsQuestion/>
        <SupportQuestion/>
        <LocationQuestion/>

        <button type="submit">See recommendations</button>


    </form>

export default Form