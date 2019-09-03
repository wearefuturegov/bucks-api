import React from "react"
import { Hint, Question } from "./utils"

const LocationQuestion = () =>
    <>

        <label><Question>3. Where do you want to look?</Question></label>
        <Hint>Give a town or postcode in Buckinghamshire</Hint>
        <input name="location"/>

    </>

export default LocationQuestion