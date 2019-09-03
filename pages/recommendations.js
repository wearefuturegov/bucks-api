import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"

const RecommendationsPage = () => 
    <Layout>

        <HeroWithColor
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home"
                },
                {
                    href: "/",
                    label: "Support near you"
                },
                {
                    label: "Recommendations"
                }
            ]}
            headline="Your recommendations"
            deck="Answer a few questions to find activities and support groups in your area"
            />


        Recommendations
    </Layout>

export default RecommendationsPage