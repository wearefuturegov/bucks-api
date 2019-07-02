import React from "react"
import { Dialog } from "@reach/dialog"

const ServiceDialog = ({service, handleDismiss}) =>
    <Dialog
        isOpen={Boolean(service)}
        onDismiss={handleDismiss}
    >
        <h1>{service.name}</h1>
        <p>{service.description}</p>
    </Dialog>

export default ServiceDialog