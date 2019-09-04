import React, { useState, useEffect } from "react"
import { Dialog } from "@reach/dialog"

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)

    return (
        <>
            <button 
                onClick={() => {toggleDialog(true)}}
                className="test-1"
            >
                Location
            </button>

            <Dialog
                isOpen={dialogOpen}
                className="test-2"
            >
                blah
            </Dialog>
            
        </>
    )
}

export default LocationFilter