import React, {useState} from "react"
import Filters from "../Filters"
import Alert from "../Alert"
import Switch from "../Switch"
import ServicesGrid from "../ServicesGrid"
import AdviceSnippetsGrid from "../AdviceSnippetGrid"
import "./style.scss"
import Router from "next/router"
import queryString from "query-string"

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
    const [mapOpen, toggleMap] = useState(false)

    if(mapOpen) Router.push(`/recommendations/map?${queryString.stringify(query)}`)

    return (

        <>
            <Filters
                query={query}
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
                            <h2 className="services__section-title"><strong>{totalServices}</strong> services near {query.formattedLocation ? query.formattedLocation : "you"}</h2>
                            <Switch
                                name="show-map"
                                checked={mapOpen}
                                onChange={()=>{
                                    toggleMap(!mapOpen)
                                }}
                            />
                        </header>
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