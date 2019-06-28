import {useState, useEffect} from "react"
import Layout from "../../components/Layout"
import ServicesGrid from "../../components/ServicesGrid"
import { getInitialProps } from "./index"
import queryString from "query-string"
import ListMap from "../../components/ListMap"
import Filters from "../../components/Filters"
import "./map.scss"

const RecommendationsPage = ({snippets, services, query, totalPages, totalServices}) => {

    const [page, changePage] = useState(1)
    const [moreServices, changeMoreServices] = useState([])
    const [loading, changeLoading] = useState(false)

    const [dialogOpen, toggleDialog] = useState(false)

    // When URL query changes, start afresh
    useEffect(()=>{
        changePage(1)
        changeMoreServices([])
    }, [query])
    
    const handleLoadMore = async () => {
        changeLoading(true)
        let loadMoreQuery = {
            ...query,
            page: page + 1
        }
        const res = await fetch(`/api/services?${queryString.stringify(loadMoreQuery)}`)
        const newServices = await res.json()
        // Update state
        changeMoreServices(moreServices.concat(newServices.results))
        changePage(page+1)
        changeLoading(false)
    }

    return(
        <Layout fullHeight>
            <header>
                <h1>Your recommendations</h1>
                <h2>Map view</h2>



                <Filters
                    query={query}
                    locationFilterIsOpen={dialogOpen}
                    toggleLocationFilterDialog={toggleDialog}
                />
            </header>
            <div className="map-view">
                <aside className="map-view__list">
                    <ServicesGrid
                        services={services.concat(moreServices)}
                        query={query}
                        loading={loading}
                        moreToLoad={page < totalPages}
                        onLoadMore={handleLoadMore}
                    />
                </aside>
                <aside className="map-view__map">
                    <ListMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_CLIENT_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        lat={parseFloat(query.lat)}
                        lng={parseFloat(query.lng)}
                        services={services.concat(moreServices)}
                    />
                </aside>
            </div>
        </Layout>
    )
}

RecommendationsPage.getInitialProps = getInitialProps

export default RecommendationsPage