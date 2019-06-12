import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import fetch from 'isomorphic-unfetch'

const Recommendations = ({snippets}) =>
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
            <AdviceSnippetGrid snippets={snippets}/>
    </Layout>

Recommendations.getInitialProps = async function({req}) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/snippets`);
    const data = await res.json();
    return {
        snippets: data
    }
}

export default Recommendations