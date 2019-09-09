import React from "react"
import Checkbox, { Checkboxes } from "../Checkbox"
import styled from "styled-components"
import { Fieldset, Hint, Question } from "./utils"
import config from "../../_config"

const FadingFieldset = styled(Fieldset)`
    @keyframes fadeIn{
        from{
            opacity: 0
        }
        to{
            opacity: 1;
        }
    }
    animation: 0.2s fadeIn ease-out;
    animation-fill-mode: forwards;
    opacity: 0;
`

const SupportQuestion = () =>
    <FadingFieldset>
        <legend>
            <Question>2. What do you need support with?</Question>
            <Hint>Select as many as you like</Hint>
        </legend>
        <Checkboxes>
            {config.supportOptions.map(option => 
                <Checkbox name="keywords" value={option.value} key={option.value}>{option.label}</Checkbox>
            )}
        </Checkboxes>
    </FadingFieldset>

export default SupportQuestion