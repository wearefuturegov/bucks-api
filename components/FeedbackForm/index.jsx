import React from "react"
import Button from "../Button"
import Radio from "../Radio"
import styled from "styled-components"
import theme from "../_theme"

const Textarea = styled.textarea`
    margin-top: 20px;
    font-size: 1em;
    border: 2px solid ${theme.darkText};
    padding: 10px;
    border-radius: 2px;
    display: block;
    width: 100%;
    &:focus{
        outline: none;
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    margin-bottom: 55px;
`

const Question = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 20px;
`

const Fieldset = styled.fieldset`
    border: none;
    margin-bottom: 55px;
`

const FeedbackForm = () =>
    <form>
        <Fieldset>
            <Question><legend>Were you able to do what you needed today?</legend></Question>
            <Radio name="satisfied" value="yes">Yes</Radio>
            <Radio name="satisfied" value="somewhat">Somewhat</Radio>
            <Radio name="satisfied" value="no">No</Radio>
        </Fieldset>

        <label htmlFor="message"><Question>How can we improve this website?</Question></label>
        <Textarea name="message" rows="5"></Textarea>

        <Button>Send feedback</Button>
    </form>

export default FeedbackForm