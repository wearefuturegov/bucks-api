import React, { useState, useEffect }  from "react"
import Checkbox from "../Checkbox"
import Router from "next/router"
import styled from "styled-components"
import theme from "../_theme"
import { Dialog } from "@reach/dialog"
import arrow from "./arrow-down.svg"
import cross from "./cross.svg"

const OpenButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1em;
    color: ${theme.darkText};
    cursor: pointer;
    margin-right: 10px;
    font-weight: ${(props) => props.active ? "bold" : "normal"};
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
    padding: 0px;
`

const Inner = styled.fieldset`
    display: block;
    border: none;
    padding: 30px; 
    padding-bottom: 20px;     
`

const Headline = styled.h3`
    color: ${theme.darkText};
    font-size: 1.5em;
    margin-bottom: 25px;
`

const Grid = styled.div`
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
    }
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

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    background: none;
    border: none;
    color: ${theme.darkText};
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    padding: 20px 30px 30px 30px;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const ClearButton = styled(Button)`
    order: -1;
`

const Filter = ({
    label,
    name,
    options
}) => {

    const [dialogOpen, toggleDialog] = useState(true)
    const [selection, changeSelection] = useState([]) 

    useEffect(()=>{
        setSelectionFromQuery()
    },[])

    const setSelectionFromQuery = () =>{
        if(Router.query[name]) changeSelection([].concat(Router.query[name]))
    }

    const closeWithoutSaving = () => {
        console.log("closing without saving")
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
                        <Button type="submit">Apply filters</Button>
                        <ClearButton onClick={clearFilter}>Clear</ClearButton>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}

export default Filter