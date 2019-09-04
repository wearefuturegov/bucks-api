import React from "react"
import { Hint, Question } from "./utils"
import styled from "styled-components"
import theme from "../_theme"


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

        </Outer>
    )
}

export default LocationQuestion