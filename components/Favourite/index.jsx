import React, {useState, useEffect} from "react"
import {isFavourited, addFavourite as addToStorage, removeFavourite as removeFromStorage} from "../../lib/localStorage"
import "./style.scss"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const Favourite = ({service, labelled}) => {

    const [favourited, setFavourited] = useState(false)

    const addFavourite = () => {
        addToStorage(service)
        setFavourited(true)
    }

    const removeFavourite = () => {
        removeFromStorage(service.assetId)
        setFavourited(false)
    }

    // Set initial favourited state
    useEffect(()=>{
        setFavourited(isFavourited(service.assetId))
    }, [])

    return(
        <>
            {favourited ?
                <button onClick={removeFavourite} className={(labelled)? "favourite-button favourite-button--labelled": "favourite-button"}>
                    <div className="favourite-button__icon">
                        <img src={heartFilled} alt="Remove from saved services"/>
                    </div>
                    {labelled && "Remove from saved services"}
                </button>
                :
                <button onClick={addFavourite} className={(labelled)? "favourite-button favourite-button--labelled": "favourite-button"}>
                    <div className="favourite-button__icon">
                        <img src={heart} alt="Save for later"/>
                    </div>
                    {labelled && "Save for later"}
                </button>
            }
        </>
    )
}

export default Favourite