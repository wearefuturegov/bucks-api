import {useState, useEffect} from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Recommendations from "../components/Recommendations"
import CentredText from "../components/CentredText"
import fetch from "isomorphic-unfetch"
import queryString from "query-string"

const RecommendationsPage = ({snippets, services, query, totalPages, totalServices}) => {

    const [page, changePage] = useState(1)
    const [moreServices, changeMoreServices] = useState([])
    const [loading, changeLoading] = useState(false)

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
        <Layout withHeader withFooter>
            <Head>
                <title>Recommendations | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
                reducedBottomPadding
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Services in your area"
                    },
                ]}
                title="Your recommendations"
            />
            <Recommendations 
                snippets={snippets}
                services={services.concat(moreServices)} 
                query={query}
                totalServices={totalServices}
                onLoadMore={handleLoadMore}
                moreToLoad={page < totalPages}
                loading={loading}
            />
            <CentredText
                title="Is anything missing?"
            >
                If you’re the organiser, of a club, activity or group that isn’t on this list, you can <Link href="/feedback?category=amend"><a>request it be adde3d</a></Link>.
            </CentredText>

        </Layout>
    )
}

export const getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""    
    const endpoints = [
        `${baseUrl}/api/services?${queryString.stringify(query)}`,
        `${baseUrl}/api/snippets?${queryString.stringify(query)}`
    ]
    let promises = await Promise.all(endpoints.map(endpoint =>
        fetch(endpoint).then(res => res.json())
    ))
    let [services, snippets] = promises
    return {
        services: services.results,
        snippets: snippets.results,
        query: query,
        totalServices: services.count,
        totalPages: services.pages
    }
}

RecommendationsPage.getInitialProps = getInitialProps

export default RecommendationsPage