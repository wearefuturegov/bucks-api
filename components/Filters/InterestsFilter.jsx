import React, { useState, useEffect }  from "react"
import Filter from "./Filter"
import Checkbox from "../Checkbox"
import Router from "next/router"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow-down.svg"
import cross from "./cross.svg"

export const OpenerButton = styled.button`
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

export const StyledDialog = styled(Dialog)`
    max-width: 500px;
    position: relative;
`

export const Headline = styled.h3`
    color: ${theme.darkText};
    font-size: 1.5em;
    margin-bottom: 25px;
`

export const CloseButton = styled.button`
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
    margin-top: 30px;
`

const Button = styled.button`
    background: none;
    border: none;
    color: ${theme.darkText};
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 0px;
    &:focus{
        outline: none;
        background: ${theme.focus};               
    }
`

const ClearButton = styled(Button)`
    order: -1;
`



const InterestsFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([]) 

    useEffect(()=>{
        if(Router.query.category) changeSelection([].concat(Router.query.category))
    },[])

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
                category: selection
            }
        })
        toggleDialog(false)
    }

    const options = [
        {
            value: "active",
            label: "Staying active"
        },
        {
            value: "social",
            label: "Socialising"
        },
        {
            value: "support",
            label: "Support with daily tasks"
        },
        {
            value: "learning",
            label: "Learning new things"
        },
        {
            value: "cultural",
            label: "Culture and visiting new places"
        }
    ]

    return(
        <Filter 
            dialogOpen={dialogOpen} 
            toggleDialog={toggleDialog} 
            name="Interests"
            active={selection.length > 0}
        >
            <form onSubmit={handleSubmit}>
                <Inner>
                    {options.map((option)=>
                        <Checkbox 
                            key={option.value}
                            name="category" 
                            value={option.value} 
                            onChange={handleChange} 
                            checked={selection.includes(option.value)}
                        >
                            {option.label}
                        </Checkbox>
                    )}
                </Inner>
                <Footer>
                    <Button type="submit">Apply filters</Button>
                    <ClearButton onClick={clearFilter}>Clear</ClearButton>
                </Footer>
            </form>
        </Filter>
    )
}

export default InterestsFilter