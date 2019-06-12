import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'

const Home = () =>
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
            {/* <AdviceSnippetGrid/> */}
    </Layout>

export default Home