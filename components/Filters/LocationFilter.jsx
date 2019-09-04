import React, { useState, useEffect } from "react"
import { Dialog } from "@reach/dialog"

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)

    return (
        <>
            <button 
                onClick={() => {toggleDialog(true)}}
            >
                Location
            </button>

            <Dialog
                isOpen={dialogOpen}
            >
                blah
            </Dialog>
            
        </>
    )
}

export default LocationFilter