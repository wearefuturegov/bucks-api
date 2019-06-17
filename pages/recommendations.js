import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import ServiceResults from '../components/ServiceResults'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'

const Recommendations = ({snippets, services, query}) =>
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

        {snippets && <AdviceSnippetGrid snippets={snippets}/>}
        {services && <ServiceResults services={services} query={query}/>}

        <CentredText/>
    </Layout>

Recommendations.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/services?${queryString.stringify(query)}`);
    const services = await res.json();
    return {
        services: services.results,
        query: query
    }
}

export default Recommendations