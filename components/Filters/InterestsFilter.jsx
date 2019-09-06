import React, { useState, useEffect }  from "react"
import Filter from "./Filter"
import Checkbox from "../Checkbox"
import Router from "next/router"

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
                <button type="submit">Apply filters</button>
                <button onClick={clearFilter}>Clear</button>
            </form>
        </Filter>
    )
}

export default InterestsFilter