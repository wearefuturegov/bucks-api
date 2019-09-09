import React, { useState }  from "react"
import cross from "./cross.svg"
import styled from "styled-components"
import theme from "../_theme"
import Radio from "../Radio"
import send from "./send.svg"
import fetch from "isomorphic-unfetch"
import {
    StyledDialog,
    Inner,
    Headline,
    Footer,
    Button,
    CloseButton
} from "../Filters/utils"

const TextInput = styled.input`
margin-top: 10px;
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
`

const OpenButton = styled.button`
    background: ${theme.darkText};
    padding: 5px 15px;
    color: white;
    border-radius: 100px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    margin-left: ${props => props.alignRight ? "auto" : "0px"};
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
    &:hover{
        filter: brightness(1.3)
    }
    &:before{
        content: "";
        display: inline-block;
        background-image: url(${send});
        width: 15px;
        height: 10px;
        margin-right: 10px;
        background-size: contain;
        background-repeat: no-repeat;
    }
`

const Fieldset = styled.fieldset`
    border: none;
    padding-top: 10px;
    margin-bottom: 20px;
`

const Alert = styled.span`
    padding: 10px;
    background: ${theme.focus};
    display: block;
    border-radius: 2px;
    margin-bottom: 20px;
`

const Filter = ({
    shareableUrl,
    singleService
}) => {

    const [dialogOpen, toggleDialog] = useState(false)

    const [response, setResponse] = useState(false)
    const [recipient, changeRecipient] = useState("")
    const [medium, changeMedium] = useState("email")

    const reset = e => {
        if(e.target.value){
            changeMedium(e.target.value)
        } else {
            changeMedium("email")
        }
        changeRecipient("")
        setResponse(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch(`/api/share/${medium}`, {
                method: "post",    
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    url: (shareableUrl)? window.location.host + shareableUrl : window.location.href, 
                    email: recipient,
                    phoneNumber: recipient
                })
            })
            setResponse(res.status)
        } catch(e){
            setResponse("fail")

        }
    }

    return(
        <>
            <OpenButton 
                alignRight={!singleService}
                onClick={() => {toggleDialog(true)}} 
                className="share-opener"
            >
                Share
            </OpenButton>
            <StyledDialog
                isOpen={dialogOpen}
                onDismiss={() => toggleDialog(false)}
                aria-live="polite"
            >
                <CloseButton onClick={() => toggleDialog(false)}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                {response === 200 ?
                    <>
                        <Inner>
                            <Headline>Shared successfully</Headline>    
                            <p>{(medium === "sms")? "A text message" : "An emaik"} has been sent to <strong>{recipient}</strong>. Would you like to share again?</p>            
                        </Inner>
                        <Footer>
                            <Button onClick={reset}>Send another</Button>
                        </Footer>
                    </>
                    :
                    <form method="post" action={`/share/${medium}`} onSubmit={handleSubmit} aria-live="polite">
                        <Inner>
                            <Headline>{(singleService)? "Share this service" : "Share these recommendations"}</Headline>
                            {(response === 500 || response === "fail") && <Alert>There was a problem sharing. If this continues, please try again later</Alert>}
                            {(response === 404) && <Alert>We couldn't share to that {(medium === "sms")? "phone number" : "email"}. Please check it and try again.</Alert>}

                            <Fieldset>
                                <legend>Share by:</legend>
                                <Radio required name="medium" onChange={reset} checked={"email" === medium} value="email">Email</Radio>
                                <Radio required name="medium" onChange={reset} checked={"sms" === medium} value="sms">Text message</Radio>
                            </Fieldset>

                            <label htmlFor="recipient">{(medium === "sms")? "Phone number" : "Email address"} </label>
                            <TextInput 
                                type={(medium === "sms")? "tel" : "email"} 
                                name="recipient"
                                id="recipient"
                                required
                                value={recipient}
                                onChange={(e)=>{
                                    changeRecipient(e.target.value)
                                }}
                            />

                        </Inner>
                        <Footer>
                            <Button type="submit">Send {(medium === "sms")? "message" : "email"}</Button>
                        </Footer>
                    </form>
                }
                    
                


            </StyledDialog>
        </>
    )
}

export default Filter