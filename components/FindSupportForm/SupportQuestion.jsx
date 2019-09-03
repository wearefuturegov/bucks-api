import React from "react"
import Checkbox from "./Checkbox"

const SupportQuestion = () =>
    <fieldset>
        <legend>
            <h2>What do you need support with?</h2>
        </legend>

        <Checkbox name="support" value="meals">Preparing meals and nutrition</Checkbox>
        {/* 5X */}

    </fieldset>

export default SupportQuestion