import React, {useState} from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import "./style.scss"
import cross from "./cross.svg"
import fetch from "isomorphic-unfetch"

const ShareDialog = () => {

    const [dialogIsOpen, toggleDialog] = useState(false)
    const [recipient, changeRecipient] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch("/api/share/email", {
            method: "post",    
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 
                url: window.location.href, 
                email: recipient 
            })
        })
    }

    return (
        <>
            <button className="share-button" onClick={() => {toggleDialog(true)}}>
                Share
            </button>



            <Dialog
                className="filter-dialog"
                isOpen={dialogIsOpen}
                onDismiss={()=>{
                    toggleDialog(false)
                }}
            >

                <form method="post" action="/share/email" onSubmit={handleSubmit}>
                    <div className="filter-dialog__body">
                        <h2 className="filter-dialog__title">Share these recommendations</h2>
                    
                        <label className="filter-dialog__text-label" htmlFor="recipient">Email address</label>
                        <input 
                            type="tel" 
                            className="filter-dialog__text-input"
                            name="recipient"
                            id="recipient"
                            required
                            value={recipient}
                            onChange={(e)=>{
                                changeRecipient(e.target.value)
                            }}
                        />
                    
        
                    
                    </div>
                    <footer className="filter-dialog__footer">
                        <button className="filter-dialog__action" 
                            type="submit" 
                        >
                            Send!
                        </button>
                    </footer>
                </form>
                <button onClick={()=>{
                    toggleDialog(false)
                }} className="filter__close"><img src={cross} alt="close filter" className="filter__close-icon"/></button>
            </Dialog>
            
        </>
    )
}

export default ShareDialog