import React from "react"
import { Dialog } from "@reach/dialog"
import "./style.scss"
import ServiceDetailItem from "../ServiceDetailItem"
import {prettyDays} from "../../lib/utils"

const ServiceDialog = ({service, handleDismiss}) =>
    <Dialog
        isOpen={Boolean(service)}
        onDismiss={handleDismiss}
        className="service-dialog"
    >
        {service &&
            <>
                <div className={`service-dialog__cover-image service-dialog__cover-image--${service.category}`}></div>
                <div className="service-dialog__body">
                    <h1>{service.name || service.parentOrganisation}</h1>
                    <p>{service.description}</p>    
                    {(service.venue || service.area || service.postcode) &&
                        <ServiceDetailItem kind="place">
                            {service.venue && <p>{service.venue}</p>}
                            {service.area && <p>{service.area}</p>}
                            {service.postcode && <p>{service.postcode}</p>}
                            <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>Get directions</a>
                        </ServiceDetailItem>
                    }
        
                    {console.log(prettyDays)}
                    {console.log(service.days)}
        
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
            </>
        }
    </Dialog>

export default ServiceDialog