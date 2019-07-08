import React from "react"
import PropTypes from "prop-types"
import ServiceCard from "../ServiceCard"
import "./style.scss"
import { prettyFeatures } from "../../lib/utils"
import Button from "../Button"
import loadingIcon from "./loading.svg"

const ServicesGrid = ({services, onLoadMore, loading, moreToLoad, className, setActiveService, fave, unfave, favourites}) => 
    <>
        <ol className={className? `services__grid ${className}` : "services__grid"} aria-live="polite">
            {services.map((service, i)=>
                <ServiceCard
                    key={i}
                    service={service}
                    setActiveService={setActiveService}
                    assetId={service.assetId}
                    category={service.category}
                    title={service.name || service.parentOrganisation}
                    description={service.description}
                    distance={service.distance}
                    parentOrganisation={service.parentOrganisation}
                    features={prettyFeatures(service)}
                    
                    fave={fave}
                    unfave={unfave}
                    favourited={favourites.find(el => {if(el.assetId === service.assetId) return el})}
                />
            )}
        </ol>
        {loading && <img className="services-grid__loader" src={loadingIcon} alt="Loading..."/>}
        {(!loading && moreToLoad) && <Button centredSecondary onClick={onLoadMore}>Show more results</Button>}
    </>
ServicesGrid.propTypes = {
    services: PropTypes.array.isRequired
}

export default ServicesGrid