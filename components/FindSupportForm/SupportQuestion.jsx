import React from "react"
import Checkbox, { Checkboxes } from "./Checkbox"
import styled from "styled-components"
import { Fieldset, Hint, Question } from "./utils"

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
            <Checkbox name="keywords" value="caring">Caring for someone else</Checkbox>
            <Checkbox name="keywords" value="transport">Getting out and about</Checkbox>
            <Checkbox name="keywords" value="housework">Housework</Checkbox>
            <Checkbox name="keywords" value="meals">Meals and nutrition</Checkbox>
            <Checkbox name="keywords" value="equipment">Equipment and safety at home</Checkbox>
            <Checkbox name="keywords" value="hygiene">Personal hygiene and incontinence</Checkbox>
            <Checkbox name="keywords" value="money">Paying for things</Checkbox>
        </Checkboxes>


    </FadingFieldset>

export default SupportQuestion