import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import ServiceResults from '../components/ServiceResults'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'

const Recommendations = ({snippets, services}) =>
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
            <ServiceResults services={services}/>
            <CentredText/>
    </Layout>

Recommendations.getInitialProps = async function({req}) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res1 = await fetch(`${baseUrl}/api/snippets`);
    const res2 = await fetch(`${baseUrl}/api/services`);
    const snippets = await res1.json();
    const services = await res2.json();
    return {
        snippets: snippets.results,
        services: services.results
    }
}

export default Recommendations