import React, { useState, useEffect } from "react"
import { isFavourited, addFavourite, removeFavourite } from "../../lib/localStorage"
import styled from "styled-components"
import theme from "../_theme"
import filledHeart from "./heart-filled.svg"
import unfilledHeart from "./heart-unfilled.svg"
import { logEvent } from "../../lib/analytics"

const Button = styled.button`
    position: relative;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: ${props => props.labelled ? "25px" : "0px"};
    .favourite-button__icon{
        margin-right: 5px;
    }
    &:hover{
        img{
            background: ${theme.background};
        }
    }
    &:focus{
        outline: none;
        img{
            box-shadow: 0px 0px 0px 3px ${theme.focus};
        }
    }
`

const Label = styled.span`
    margin-left: 10px;
    color: ${theme.lightText};
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

const Favouriter = ({
    labelled,
    favourited,
    onChange
}) => 
    <Button labelled={labelled} onClick={onChange}>
        {favourited ? <Img src={filledHeart} alt="Unsave"/> : <Img src={unfilledHeart} alt="Save for later"/>}
        {labelled && 
            <Label>{favourited ? "Unsave" : "Save for later"}</Label>
        }
    </Button>


export const withHoistedState = OriginalComponent => {
    const NewComponent = (props) => {
        let { favourited, unfave, fave, service } = props
        const handleChange = () => {
            if(favourited){
                unfave(service.assetId)
                logEvent("Service detail", "Unsave a service")
            } else {
                fave(service)
                logEvent("Service detail", "Save a service")
            }
        }
        return <OriginalComponent {...props} favourited={favourited} onChange={handleChange}  />
    }
    return NewComponent
}

export const withState = OriginalComponent => {
    const NewComponent = (props) => {

        const [favourited, setFavourited] = useState(false)

        useEffect(()=>{
            if(isFavourited(props.service.assetId)) {
                setFavourited(true)
            } else {
                setFavourited(false)
            }
        }, [])

        const handleChange = () => {
            if(favourited) {
                setFavourited(false)
                removeFavourite(props.service.assetId)
            } else {
                setFavourited(true)
                let serviceToSave = props.service
                delete serviceToSave.distance
                addFavourite(props.service)
            }
        }
        return <OriginalComponent {...props} favourited={favourited} onChange={handleChange}/>
    }
    return NewComponent
}

export default Favouriter
