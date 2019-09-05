import React, { useState } from "react"
import { Dialog } from "@reach/dialog"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow-down.svg"
import AutocompletePlacesInput from "../AutocompletePlacesInput"

const OpenerButton = styled.button`
    background: none;
    border: none;
    padding: 5px 5px 10px 5px;
    font-size: 1em;
    color: ${theme.darkText};
    cursor: pointer;
    &:focus{
        outline: none;
        background: ${theme.focus};               
    }
    &:after{
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${arrow});
        margin-left: 7px;
    }
`

const StyledDialog = styled(Dialog)`
    max-width: 600px;
`

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)

    return (
        <>
            <OpenerButton 
                onClick={() => {toggleDialog(true)}}
                className="test-1"
            >
                Location
            </OpenerButton>

            <StyledDialog
                isOpen={dialogOpen}
                className="test-2"
                onDismiss={()=>toggleDialog(false)}
            >

                <h3>Location</h3>
                <AutocompletePlacesInput/>
                <button>Apply</button>
            </StyledDialog>
            
        </>
    )
}

export default LocationFilter