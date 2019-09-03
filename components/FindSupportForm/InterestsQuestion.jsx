import React from "react"
import Checkbox, { Checkboxes } from "./Checkbox"
import styled from "styled-components"
import theme from "../_theme"
import { Fieldset, Hint, Question } from "./utils"


const InterestsQuestion = ({
    support,
    setSupport
}) => {

    const handleSupportChange = (e) => {
        setSupport(e.target.checked)
    }

    return(
        <Fieldset>
            <legend>
                <Question>1. What are you interested in?</Question>
                <Hint>Select as many as you like</Hint>
            </legend>
            <Checkboxes>
                <Checkbox name="category" value="active">Staying active</Checkbox>
                <Checkbox name="category" value="social">Socialising</Checkbox>

                <Checkbox 
                    name="category" 
                    value="support"
                    checked={support}
                    onChange={handleSupportChange}
                    >
                    Support with daily tasks
                </Checkbox>

                <Checkbox name="category" value="learning">Learning new skills</Checkbox>
                <Checkbox name="category" value="cultural">Culture and visiting new places</Checkbox>
            </Checkboxes>
        </Fieldset>
    )
}


export default InterestsQuestion