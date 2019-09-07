import React, { useState } from "react"
import Button from "../Button"
import Radio from "../Radio"
import styled from "styled-components"
import theme from "../_theme"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"

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

const Message = styled.p`
    display: block;
    background: ${theme.shadow};
    color: ${theme.darkText};
    padding: 15px;
    border-radius: 2px;
    margin-bottom: 20px;
`

const StyledButton = styled(Button)`
    &:disabled{
        background: ${theme.shadow};
        pointer-events: none;
    }
`

const FeedbackForm = () => {

    const router = useRouter()
    const {category, serviceId} = router.query

    const [submitted, setSubmitted] = useState(false)
    const [satisfied, setSatisfied] = useState("")
    const [message, setMessage] = useState("")

    let messageLabel = "How can we improve this website"
    if((category === "amend") && serviceId) messageLabel = "Describe what should be changed about this service"
    if(category === "new") messageLabel = "Describe the service you would like us to add"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch("/api/feedback", {
                method: "post",    
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    message: message,
                    satisfied: satisfied,
                    category: category,
                    serviceId: serviceId
                })
            })
            if(res.status === 200){
                setSatisfied("")
                setMessage("")
                setSubmitted(true)
            }
        } catch(e){
            console.log(e)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Fieldset>
                <Question><legend>Were you able to do what you needed today?</legend></Question>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"yes" === satisfied} value="yes">Yes</Radio>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"somewhat" === satisfied} value="somewhat">Somewhat</Radio>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"no" === satisfied} value="no">No</Radio>
            </Fieldset>

            <label htmlFor="message"><Question>{messageLabel}</Question></label>
            <Textarea 
                required 
                name="message" 
                rows="5"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <div aria-live="polite">
                {submitted && <Message>Your feedback has been submitted successfully.</Message>}
            </div>
            <StyledButton disabled={submitted}>Send feedback</StyledButton>
        </form>
    )
}


export default FeedbackForm