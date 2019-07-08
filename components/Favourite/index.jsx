import React from "react"
import "./style.scss"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const Favourite = ({service, labelled, favourited, fave, unfave}) => {

    return(
        <>
            {favourited ?
                <button onClick={()=>{
                    unfave(service.assetId)
                }} className={(labelled)? "favourite-button favourite-button--labelled": "favourite-button"}>
                    <div className="favourite-button__icon">
                        <img src={heartFilled} alt="Remove from saved services"/>
                    </div>
                    {labelled && "Remove from saved services"}
                </button>
                :
                <button onClick={()=>{
                    fave(service)
                }} className={(labelled)? "favourite-button favourite-button--labelled": "favourite-button"}>
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