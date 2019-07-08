import React from "react"
import "./style.scss"
import heart from "./heart.svg"
import heartFilled from "./heart-filled.svg"

const Favourite = ({service, favourited, fave, unfave}) => 
    <>
        {favourited ?
            <button onClick={()=>{
                unfave(service.assetId)
            }} className="favourite-button--labelled">
                <div className="favourite-button__icon">
                    <img src={heartFilled} alt="Remove from saved services"/>
                </div>
                Remove from saved services
            </button>
            :
            <button onClick={()=>{
                fave(service)
            }} className="favourite-button--labelled">
                <div className="favourite-button__icon">
                    <img src={heart} alt="Save for later"/>
                </div>
                Save for later
            </button>
        }
    </>


export default Favourite