import React, {useState} from "react"
import Filters from "../Filters"
import Alert from "../Alert"
import Switch from "../Switch"
import ServicesGrid from "../ServicesGrid"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import ListMap from "../Maps"
import "./style.scss"

const Recommendations = ({
    services,
    snippets, 
    query, 
    onLoadMore, 
    moreToLoad, 
    totalServices, 
    loading
}) => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [mapOpen, toggleMap] = useState(true)

    return (

        <>
            <Filters
                locationFilterIsOpen={dialogOpen}
                toggleLocationFilterDialog={toggleDialog}
            />

            <section className="recommendations">
                <div className="container">
                    {(query.formattedLocation === "Buckinghamshire, UK") && <Alert onClick={()=>{
                        toggleDialog(true)
                    }}/>}
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
        </>
    )
}


export default Recommendations