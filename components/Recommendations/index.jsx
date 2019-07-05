import React, {useState, useEffect} from "react"
import Filters from "../Filters"
import Alert from "../Alert"
import Switch from "../Switch"
import ServicesGrid from "../ServicesGrid"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import ListMap from "../Maps"
// import ServiceDialog from "../ServiceDialog"
import "./style.scss"
import {listFavourites} from "../../lib/localStorage"

const Recommendations = ({
    services,
    snippets, 
    query, 
    onLoadMore, 
    moreToLoad, 
    totalServices, 
    loading
}) => {

    const [favourites, setFavourites] = useState([])

    const [dialogOpen, toggleDialog] = useState(false)
    const [mapOpen, toggleMap] = useState(false)
    // const [activeService, setActiveService] = useState(false)

    useEffect(()=>{
        setFavourites(listFavourites())
    }, [])




    return (
        <>
            <Filters
                locationFilterIsOpen={dialogOpen}
                toggleLocationFilterDialog={toggleDialog}
            />
            <section className="recommendations">
                <div className="container">
                    {(query.formattedLocation === "Buckinghamshire, UK") && <Alert>That location doesn't look right.  <button className="alert__button" onClick={()=>{
                        toggleDialog(true)
                    }}>Check now</button></Alert>}

                    {(favourites && favourites.length > 0) &&
                        <section className="saved">
                            <header className="services__header">
                                <h2 className="services__section-title">Saved from last time</h2>
                            </header>
                            <ServicesGrid
                                services={favourites}
                                // setActiveService={setActiveService}
                                className="services__grid--with-columns"
                            />
                        </section>                    
                    }

                    <section className="services">
                        <header className="services__header">
                            <h2 className="services__section-title">{services.length} of <strong>{totalServices}</strong> services near {query.formattedLocation ? query.formattedLocation : "you"}</h2>
                            {services.length > 0 && 
                                <Switch
                                    name="show-map"
                                    checked={mapOpen}
                                    onChange={()=>{
                                        toggleMap(!mapOpen)
                                    }}
                                />
                            }
                        </header>
                        {(mapOpen && services.length > 0) &&
                            <ListMap
                                loadingElement={<div style={{ height: "100%" }} />}
                                containerElement={<div style={{ height: "100%" }} />}
                                mapElement={<div className="list-map" />}
                                lat={parseFloat(query.lat)}
                                lng={parseFloat(query.lng)}
                                services={services}
                            />
                        }
                        <ServicesGrid
                            services={services}
                            // setActiveService={setActiveService}
                            query={query}
                            loading={loading}
                            moreToLoad={moreToLoad}
                            onLoadMore={onLoadMore}
                            className="services__grid--with-columns"
                        />
                    </section>
                    {snippets.length > 0 && 
                        <section className="advice">
                            <header className="advice__header">
                                <h2 className="advice__section-title">Advice for you</h2>
                            </header>
                            <AdviceSnippetsGrid snippets={snippets}/>
                        </section>
                    }
                </div>
            </section>

            {/* <ServiceDialog
                service={activeService}
                handleDismiss={()=>{
                    console.log(Router)
                    Router.push(Router.pathname, {
                        query: Router.query
                    })
                    setActiveService(false)
                }}
            /> */}

        </>
    )
}


export default Recommendations