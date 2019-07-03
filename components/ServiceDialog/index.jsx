import React, {useState} from "react"
import { Dialog } from "@reach/dialog"
import "./style.scss"
import ServiceDetailItem from "../ServiceDetailItem"
import {prettyDays} from "../../lib/utils"
import cross from "./cross.svg"
import heart from "./heart.svg"
import send from "./send.svg"
import ShareDialog from "../ShareDialog"
import Button from "../Button"
import DetailMap from "../Maps/DetailMap"

const ServiceDialog = ({service, handleDismiss}) => {
    const [shareDialogOpen, toggleShareDialog] = useState(false)
    return(
        <Dialog
            isOpen={Boolean(service)}
            onDismiss={handleDismiss}
            className="service-dialog"
        >
            {service &&
                <>
                    <div className={`service-dialog__cover-image service-dialog__cover-image--${service.category}`}>
                        <div className="service-dialog__actions">
                            <button className="service-dialog__button" onClick={handleDismiss}><img src={cross} alt="Close"/></button>
                            <div>
                                <button className="service-dialog__button"><img src={heart} alt="Save for later"/></button>
                                <button className="service-dialog__button" onClick={()=>{
                                    toggleShareDialog(true)
                                }}><img src={send} alt="Share"/></button>

                            </div>

                        </div>
                    </div>
                    <div className="service-dialog__body">
                        <h1 className="service-dialog__title">{service.name || service.parentOrganisation}</h1>
                        {service.description && <p className="service-dialog__description">{service.description}</p>}

                        {service.url && <Button withBottomMargin href={service.url}>Visit website</Button>}
                        
                        {(service.venue || service.area || service.postcode) &&
                            <ServiceDetailItem kind="place">
                                {service.venue && <p>{service.venue}</p>}
                                {service.area && <p>{service.area}</p>}
                                {service.postcode && <p>{service.postcode}</p>}
                                <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>Get directions</a>
                            </ServiceDetailItem>
                        }
            
                        {(service.days.length > 0 || service.frequency) &&
                            <ServiceDetailItem kind="calendar">
                                {service.days.length > 0 && prettyDays(service.days)}
                                {service.frequency && <p>{service.frequency}</p>}
                            </ServiceDetailItem>
                        }
                        {(service.contactName || service.phone || service.email) &&
                            <ServiceDetailItem kind="contact">
                                {service.contactName && <p>{service.contactName}</p>}
                                {service.phone && <p>{service.phone}</p>}
                                {service.email && <a href={`mailto:${service.email}`}>{service.email}</a>}
                            </ServiceDetailItem>                    
                        }
                    </div> 
                    <DetailMap
                        category={service.category}
                        coordinates={service.geo.coordinates}
                    />
                    <ShareDialog
                        dialogIsOpen={shareDialogOpen}
                        toggleDialog={toggleShareDialog}
                        shareableUrl={`/service/${service.assetId}`}
                        singleService
                    />
                </>

            }
        </Dialog>
    )
}

export default ServiceDialog