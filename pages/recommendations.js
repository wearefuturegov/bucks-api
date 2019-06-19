import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import Recommendations from '../components/Recommendations'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'

const RecommendationsPage = ({snippets, services, query}) =>
    <Layout withHeader>
        <PageHeader 
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
            services={services} 
            query={query}
            />
        <CentredText/>
    </Layout>

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
        query: query
    }

}

export default RecommendationsPage