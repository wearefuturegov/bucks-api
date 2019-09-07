import React, { useState }  from "react"
import cross from "./cross.svg"
import styled from "styled-components"
import theme from "../_theme"
import Radio from "../Radio"
import send from "./send.svg"
import {
    StyledDialog,
    Inner,
    Headline,
    Footer,
    Button,
    CloseButton
} from "../Filters/utils"

const OpenButton = styled.button`
    background: ${theme.darkText};
    padding: 5px 15px;
    color: white;
    border-radius: 100px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: auto;
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

const Filter = () => {

    const [dialogOpen, toggleDialog] = useState(false)

    return(
        <>
            <OpenButton 
                onClick={() => {toggleDialog(true)}} 
                className="share-opener"
            >
                Share
            </OpenButton>
            <StyledDialog
                isOpen={dialogOpen}
                className="share-dialog"
                onDismiss={() => toggleDialog(false)}
            >
                <CloseButton onClick={() => toggleDialog(false)}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
   
                <Inner>
                    <Headline>Share</Headline>
                    Test
                </Inner>
                <Footer>
                    <Button type="submit">Send</Button>
                </Footer>

            </StyledDialog>
        </>
    )
}

export default Filter