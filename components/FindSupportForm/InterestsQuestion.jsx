import React from "react"
import Checkbox, { Checkboxes } from "../Checkbox"
import { Fieldset, Hint, Question } from "./utils"
import config from "../../_config"

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
                {config.interestsOptions.map(option => {
                    if(option.value === "support"){
                        return(
                            <Checkbox 
                                name="category" 
                                value={option.value}
                                checked={support}
                                onChange={handleSupportChange}
                                key={option.value}
                            >
                                {option.label}
                            </Checkbox>
                        )
                    } else {
                        return <Checkbox name="category" value={option.value} key={option.value}>{option.label}</Checkbox>
                    }
                })}
            </Checkboxes>
        </Fieldset>
    )
}


export default InterestsQuestion