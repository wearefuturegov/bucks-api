import {useState, useEffect} from 'react'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import Recommendations from '../components/Recommendations'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'

const RecommendationsPage = ({snippets, services, query, totalPages}) => {

    const [page, changePage] = useState(1)
    const [moreServices, changeMoreServices] = useState([])

    // When URL query changes, start afresh
    useEffect(()=>{
        changePage(1)
        changeMoreServices([])
    }, [query])

    const handleLoadMore = async () => {
        let loadMoreQuery = {
            ...query,
            page: page + 1
        }
        const res = await fetch(`/api/services?${queryString.stringify(loadMoreQuery)}`)
        const newServices = await res.json()
        // Update state
        changeMoreServices(moreServices.concat(newServices.results))
        changePage(page+1)
    }

    return(
        <Layout withHeader>
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
                onLoadMore={handleLoadMore}
                moreToLoad={page < totalPages}
                />
            <CentredText
                title="Is anything missing?"
                description="If you’re the organiser, of a club, activity or group that isn’t on this list, you can request it be added."
                />
        </Layout>
    )

}

RecommendationsPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';    
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
        totalPages: services.pages
    }
}

export default RecommendationsPage