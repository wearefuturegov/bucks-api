import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"
import PageBodyContent from "../components/PageBodyContent"

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
        <PageBodyContent
            sidebarItems={[
                {
                    href: "/",
                    label: "Paying for care"
                },
                {
                    href: "/",
                    label: "Bucks family information service"
                }
            ]}
            >
            <p>Yeah, but John, if The Pirates of the <a href="#">testing link</a> Caribbean breaks down, the pirates don’t eat the tourists. Must go faster... go, go, go, go, go! What do they got in there? King Kong? Forget the fat lady! You're obsessed with the fat lady! Drive us out of here!</p>
            <h2>Testing</h2>
            <p>Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.</p>
        </PageBodyContent>
    </Layout>

export default RecommendationsPage