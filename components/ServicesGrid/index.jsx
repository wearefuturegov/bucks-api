import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ServiceCard from '../ServiceCard'
import './style.scss'
import fetch from 'isomorphic-unfetch'

const ServicesGrid = ({initialServices}) => {

    // TODO:
    // 1. Abstract into a higher component
    // 2. Only show the button when more results are available
    // 3. honour query string filters

    const [moreServices, addMoreServices] = useState([])
    const [page, changePage] = useState(1)

    const handleFetch = async () => {
        changePage(page+1)
        const res = await fetch(`/api/services?page=${page}`)
        const newServices = await res.json()
        addMoreServices(moreServices.concat(newServices.results))
    }

    return (
        <>
            <h2 className="recommendations__section-title">Services near you</h2>

            {initialServices.length > 0 ? 
                <ol className="services-grid">
                    {initialServices.concat(moreServices).map((service, i)=>
                        <ServiceCard
                            key={i}
                            assetId={service.assetId}
                            category={service.category}
                            title={service.name || service.parentOrganisation}
                            description={service.description}
                            distance={service.distance}
                            parentOrganisation={service.parentOrganisation}
                            />
                    )}
                </ol>
            : 
                <div className="services-grid__no-results">
                    <h3>No results</h3>
                    <p>Improve your search results by removing filters or double-checking your spelling.</p>
                </div>

                
            }
                        <button onClick={handleFetch}>get more</button>
        </>
    )
}

ServicesGrid.propTypes = {
    initialServices: PropTypes.array.isRequired
}

export default ServicesGrid