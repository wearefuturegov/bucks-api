import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

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
            lede="If you, or someone you know, struggles with everyday tasks, there might be gadgets or equipment to help make life easier: pendant alarms, railings, wheelchairs..."
            />
    </Layout>

export default Home