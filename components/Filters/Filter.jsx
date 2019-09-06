import React from "react"
import { Dialog } from "@reach/dialog"
import {} from "./utils"
import cross from "./cross.svg"

const Filter = ({
    dialogOpen,
    toggleDialog,
    name,
    active,
    children
}) => 
    <>
        <OpenerButton active={active} onClick={() => {toggleDialog(true)}} className={`${name}-opener`}>
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