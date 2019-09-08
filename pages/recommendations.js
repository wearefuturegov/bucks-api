import Layout from "../components/Layout"
import Results from "../components/Results"
import HeroWithColor from "../components/HeroWithColor"
import fetch from "isomorphic-unfetch"
import queryString from "query-string"
import Filters from "../components/Filters"
import CallToAction from "../components/CallToAction"
import Link from "next/link"
import Head from "next/head"
import CardGrid from "../components/CardGrid"

const RecommendationsPage = ({
    services,
    snippets,
    query,
    totalPages
}) => {
    let snippetCards = snippets.map(snippet => {
        return {
            headline: snippet.title,
            deck: snippet.description,
            href: snippet.href
        }
    })
    return(

        <Layout>
            <Head>
                <title>Recommendations | Find support near you | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content="Your recommendations" />
                <meta property="og:description" content="Answer a few questions and we'll suggest recommendations in your area." />
            </Head>
            <HeroWithColor
                headline="Your recommendations"
                backgroundColor="white"
                deck="Based on your answers, we've found these matches which you might find useful."
                breadcrumbs={[
                    {
                        href: "https://www.careadvicebuckinghamshire.org/",
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
            {(snippets.length > 0) && <CardGrid headline="Related information and advice" cards={snippetCards}/>}
            <CallToAction headline="Is anything missing?">
                <p>If you’re the organiser, of a club, activity or group that isn’t on this list, you can <Link href="/feedback?category=new"><a>request it be added.</a></Link></p>
            </CallToAction>
        </Layout>
    )
}

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