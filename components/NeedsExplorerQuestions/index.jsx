import React, {useState} from "react"
import "./style.scss"
import Button from "../Button"
import queryString from "query-string"
import Router from "next/router"
import geocode from "../../lib/geocode-client"

import CategoryQuestion from "./CategoryQuestion"
import KeywordQuestion from "./KeywordQuestion"
import LocationQuestion from "./LocationQuestion"
import AgeQuestion from "./AgeQuestion"

const NeedsExplorerQuestions = () => {

    const [categorySelection, changeCategorySelection] = useState([])
    const handleCategoryChange = (e) => {
        let {checked, value} = e.target
        // Clear out keywords whenever the support category is hit
        if(value === "support") changeKeywordSelection([])
        if(checked){
            changeCategorySelection([...categorySelection, value])
        } else {
            changeCategorySelection(categorySelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    const [keywordSelection, changeKeywordSelection] = useState([])
    const handleKeywordChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeKeywordSelection([...keywordSelection, value])
        } else {
            changeKeywordSelection(keywordSelection.filter(selection=>{
                return selection != value
            }))
        }
    }

    const [ageSelection, changeAgeSelection] = useState([])
    const handleAgeChange = (e) => {
        changeAgeSelection([e.target.value])
    }

    const [rawLocation, changeRawLocation] = useState("")
    const [formattedLocation, changeFormattedLocation] = useState("")
    const handleRawLocationChange = (e) => {
        changeRawLocation(e.target.value)
        if(!e.target.value) changeFormattedLocation(false)
    }

    const handleBlur = async (e) => {
        if(e.target.value){
            let location = await geocode(rawLocation)
            changeFormattedLocation(location.formattedLocation)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let geocoded = await geocode(rawLocation)
        let query = {
            category: categorySelection,
            keywords: keywordSelection,
            location: rawLocation,
            formattedLocation: geocoded.formattedLocation,
            age: ageSelection,
            lat: geocoded.lat,
            lng: geocoded.lng
        }
        Router.push(`/recommendations?${queryString.stringify(query)}`).then(() => window.scrollTo(0, 0))
    }

    return(
        <form method="get" action="/recommendations" onSubmit={handleSubmit} aria-live="polite">
            <section className="questions">
                <div className="questions__inner">

                    <CategoryQuestion 
                        selection={categorySelection} 
                        onChange={handleCategoryChange}
                    />
                    {categorySelection.includes("support") && 
                        <KeywordQuestion 
                            onChange={handleKeywordChange} 
                            selection={keywordSelection}
                        />
                    }

                    <AgeQuestion 
                        onChange={handleAgeChange} 
                        selection={ageSelection}
                    />

                    <LocationQuestion 
                        rawLocation={rawLocation} 
                        formattedLocation={formattedLocation} 
                        onChange={handleRawLocationChange} 
                        onBlur={handleBlur}
                    />
                </div>
            </section>
            <section className="continue-to-recommendations container">
                <ContinueToRecommendations
                    keywordSelection={keywordSelection}
                    ageSelection={ageSelection}
                    categorySelection={categorySelection}
                    rawLocation={rawLocation}
                />
            </section>
        </form>
    )
}

export default NeedsExplorerQuestions

const ContinueToRecommendations= ({categorySelection, keywordSelection, ageSelection, rawLocation}) => {
    if ((categorySelection.length > 0 || keywordSelection.length > 0 || ageSelection.length > 0) && rawLocation){
        return(
            <>
                <p className="continue-to-recommendations__message">See recommendations that could be right for you:</p>
                <Button>Go to recommendations</Button>
            </>
        )
    } else if (categorySelection.length > 0 || keywordSelection.length > 0 || ageSelection.length > 0){
        return(
            <>
                <p className="continue-to-recommendations__message">Give <strong>a location</strong> to see your recommendations</p>
                <Button disabled>Go to recommendations</Button>
            </>
        )
    } else {
        return(
            <>
                <p className="continue-to-recommendations__message">Answer <strong>more questions</strong> to see your recommendations</p>
                <Button disabled>Go to recommendations</Button>
            </>
        )
    }
}
