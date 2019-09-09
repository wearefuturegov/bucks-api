import React, {useState, useEffect} from "react"
import AutocompletePlacesInput from "../AutocompletePlacesInput"
import Router from "next/router"
import cross from "./cross.svg"
import styled from "styled-components"
import theme from "../_theme"
import {
    StyledDialog,
    Inner,
    Headline,
    Footer,
    Button,
    OpenButton,
    CloseButton,
} from "./utils"

const Hint = styled.p`
    font-size: 0.9em;
    color: ${theme.lightText}
`

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState("") 

    useEffect(()=>{
        setSelectionFromQuery()
    },[])

    const setSelectionFromQuery = () =>{
        if(Router.query.location){
            changeSelection(Router.query.location)
        } else {
            changeSelection("") 
        }
    }

    const closeWithoutSaving = () => {
        setSelectionFromQuery()
        toggleDialog(false)
    }

    const handleChange = (e) => {
        changeSelection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Router.push({
            pathname: "/recommendations",
            query: {
                ...Router.query,
                lat: null,
                lng: null,
                location: selection
            }
        })
        toggleDialog(false)
    }
    
    return(
        <>
            <OpenButton 
                active={selection.length > 0} 
                onClick={()=> toggleDialog(true)}
                className="location-opener"
            >
                Location
            </OpenButton>
            <StyledDialog
                isOpen={dialogOpen}
                className="location-dialog"
                onDismiss={closeWithoutSaving}
            >
                <CloseButton onClick={closeWithoutSaving}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <Inner>
                        <Headline><legend>Change location</legend></Headline>
                        <Hint>Enter a Buckinghamshire town or postcode.</Hint>
                        <AutocompletePlacesInput value={selection} onChange={handleChange}/>
                    </Inner>
                    <Footer>
                        <Button type="submit">Search again</Button>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}


export default LocationFilter