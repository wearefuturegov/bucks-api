import React from "react"
import Checkbox from "./Checkbox"

const InterestsQuestion = () =>
    <fieldset>
        <legend>
            <h2>What are you interested in?</h2>
        </legend>

        <Checkbox name="interests" value="staying-active">Staying active</Checkbox>
        <Checkbox name="interests" value="support">Support</Checkbox>
        {/* 5X */}

    </fieldset>

export default InterestsQuestion