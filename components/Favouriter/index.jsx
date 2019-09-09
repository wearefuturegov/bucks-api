import React, { useState, useEffect } from "react"
import { isFavourited, addFavourite, removeFavourite } from "../../lib/localStorage"
import styled from "styled-components"
import theme from "../_theme"
import filledHeart from "./heart-filled.svg"
import unfilledHeart from "./heart-unfilled.svg"

const Button = styled.button`
    position: relative;
    z-index: 1;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: ${props => props.labelled ? "25px" : "0px"}
    .favourite-button__icon{
        margin-right: 5px;
    }
    &:hover{
        .favourite-button__icon{
            background: $background;
        }
    }
`

const Label = styled.span`
    margin-left: 10px;
    color: ${theme.lightText}
`

const Favouriter = ({
    labelled,
    service
}) => {

    useEffect(()=>{
        if(isFavourited(service.assetId)) {
            setFavourited(true)
        } else {
            setFavourited(false)
        }
    }, [])

    const [favourited, setFavourited] = useState(false)

    return(
        <Button labelled={labelled} onClick={() => {
            if(favourited) {
                setFavourited(false)
                removeFavourite(service.assetId)
            } else {
                setFavourited(true)
                let serviceToSave = service
                delete serviceToSave.distance
                addFavourite(service)
            }
        }}>
            {favourited ? <img src={filledHeart} alt="Unsave"/> : <img src={unfilledHeart} alt="Save for later"/>}
            {labelled && 
                <Label>{favourited ? "Unsave" : "Save for later"}</Label>
            }
        </Button>
    )
}

export default Favouriter