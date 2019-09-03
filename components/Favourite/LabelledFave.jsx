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
                    <img src={heartFilled} alt=""/>
                </div>
                Remove from favourites
            </button>
            :
            <button onClick={()=>{
                fave(service)
            }} className="favourite-button--labelled">
                <div className="favourite-button__icon">
                    <img src={heart} alt=""/>
                </div>
                Favourite
            </button>
        }
    </>


export default Favourite