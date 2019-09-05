import React from "react"
import { Hint, Question } from "./utils"
import styled from "styled-components"
import AutocompletePlacesInput from "../AutocompletePlacesInput"

const Outer = styled.div`
    margin-bottom: 55px;
`

const LocationQuestion = ({
    support
}) => {

    return(
        <Outer>
            <label htmlFor="location">
                <Question>{support ? "3" : "2"}. Where do you want to look?</Question>
            </label>
            <Hint>Give a town or postcode in Buckinghamshire.</Hint>
            <AutocompletePlacesInput/>
        </Outer>
    )
}

export default LocationQuestion