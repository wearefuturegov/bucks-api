import React, { useState }  from "react"
import Filter from "./Filter"
import Checkbox from "../Checkbox"
import Router from "next/router"

const InterestsFilter = () => {

    const [selection, changeSelection] = useState([]) 

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
                category: selection
            }
        })

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
        <Filter name="Interests">
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
                <button onClick={clearFilter}>Clear</button>
                <button type="submit">Apply filters</button>
            </form>
        </Filter>
    )
}

export default InterestsFilter