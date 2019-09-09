import React, { useState, useEffect }  from "react"
import Checkbox from "../Checkbox"
import Router from "next/router"
import cross from "./cross.svg"
import {
    StyledDialog,
    Inner,
    Headline,
    Grid,
    Footer,
    Button,
    OpenButton,
    CloseButton,
    ClearButton
} from "./utils"

const Filter = ({
    label,
    name,
    options
}) => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([]) 

    useEffect(()=>{
        setSelectionFromQuery()
    },[])

    const setSelectionFromQuery = () =>{
        if(Router.query[name]){
            changeSelection([].concat(Router.query[name])) 
        } else {
            changeSelection([]) 
        }
    }

    const closeWithoutSaving = () => {
        setSelectionFromQuery()
        toggleDialog(false)
    }

    const handleChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeSelection([...selection, value]  )
        } else {
            changeSelection(selection.filter(el=> el != value))
        }
    }

    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeSelection([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Router.push({
            pathname: "/recommendations",
            query: {
                ...Router.query,
                [name]: selection
            }
        })
        toggleDialog(false)
    }

    return(
        <>
            <OpenButton 
                active={selection.length > 0} 
                onClick={() => {toggleDialog(true)}} 
                className={`${label}-opener`}
            >
                {label}
            </OpenButton>
            <StyledDialog
                isOpen={dialogOpen}
                className={`${label}-dialog`}
                onDismiss={closeWithoutSaving}
            >
                <CloseButton onClick={closeWithoutSaving}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <Inner>
                        <Headline><legend>{label}</legend></Headline>
                        <Grid>
                            {options.map((option)=>
                                <Checkbox 
                                    key={option.value}
                                    name={name} 
                                    value={option.value} 
                                    onChange={handleChange} 
                                    checked={selection.includes(option.value)}
                                >
                                    {option.label}
                                </Checkbox>
                            )}
                        </Grid>
                    </Inner>
                    <Footer>
                        <Button type="submit">Apply</Button>
                        <ClearButton onClick={clearFilter}>Clear</ClearButton>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}

export default Filter