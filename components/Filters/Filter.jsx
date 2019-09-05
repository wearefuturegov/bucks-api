import React from "react"
import { Dialog } from "@reach/dialog"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow-down.svg"
import cross from "./cross.svg"

const OpenerButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1em;
    color: ${theme.darkText};
    cursor: pointer;
    margin-right: 10px;
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
    max-width: 500px;
    position: relative;
`

const Headline = styled.h3`
    color: ${theme.darkText};
    font-size: 1.5em;
    margin-bottom: 25px;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
`

const Filter = ({
    dialogOpen,
    toggleDialog,
    name,
    children
}) => 
    <>
        <OpenerButton onClick={() => {toggleDialog(true)}} className={`${name}-opener`}>
            {name}
        </OpenerButton>
        <StyledDialog
            isOpen={dialogOpen}
            className={`${name}-dialog`}
            onDismiss={()=>toggleDialog(false)}
        >
            <CloseButton onClick={()=>toggleDialog(false)}>
                <img src={cross} alt="Close without saving"/>
            </CloseButton>
            <Headline>{name}</Headline>
            {children}
        </StyledDialog>
    </>

export default Filter