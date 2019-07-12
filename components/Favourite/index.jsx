import React from "react"
import "./style.scss"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const Favourite = ({service, favourited, fave, unfave}) => 
    <>
        {favourited ?
            <button onClick={()=>{
                unfave(service.assetId)
            }} className="favourite-button--unlabelled">
                <div className="favourite-button__icon">
                    <img src={heartFilled} alt="Remove from favourites"/>
                </div>
            </button>
            :
            <button onClick={()=>{
                fave(service)
            }} className="favourite-button--unlabelled">
                <div className="favourite-button__icon">
                    <img src={heart} alt="Favourite"/>
                </div>
            </button>
        }
    </>

export default Favourite