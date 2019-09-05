import Layout from "../components/Layout"
import Results from "../components/Results"
import HeroWithColor from "../components/HeroWithColor"
import fetch from "isomorphic-unfetch"
import queryString from "query-string"
import Filters from "../components/Filters"

const RecommendationsPage = ({
    services,
    snippets,
    query,
    totalPages
}) => 
    <Layout>
        <HeroWithColor
            headline="Your recommendations"
            backgroundColor="white"
            deck="Based on your answers, we've found these matches."
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home",
                },
                {
                    href: "/",
                    label: "Support near you"
                },
                {
                    label: "Recommendations"
                }
            ]}
        />
        <Filters/>
        <Results
            query={query}
            services={services}
            totalPages={totalPages}
        />
    </Layout>

// TODO: error handling when (1) apis are down, (2) location not provided
RecommendationsPage.getInitialProps = async ({ req, query }) =>{
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""   
    // 1. Attempt to geocode location server-side if not explicitly provided
    if(!parseFloat(query.lat) || !parseFloat(query.lng)){
        let res = await fetch(`${baseUrl}/api/geocode?location=${query.location}`)
        let data = await res.json()
        // TODO: work out what's going on here
        query.lat = data.results[0].geometry.location.lat
        query.lng = data.results[0].geometry.location.lng
    }
    // 2. Fetch service and snippet data based on the query
    const endpoints = [
        `${baseUrl}/api/services?${queryString.stringify(query)}`,
        `${baseUrl}/api/snippets?${queryString.stringify(query)}`
    ]
    let promises = await Promise.all(endpoints.map(endpoint =>
        fetch(endpoint).then(res => res.json())
    ))
    let [services, snippets] = promises
    // 3. Return props
    return {
        services: services.results,
        snippets: snippets.results,
        totalPages: services.pages,
        query: query,
    }
}

export default RecommendationsPage