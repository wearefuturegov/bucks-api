import Layout from "../components/Layout"
import HeroWithImage from "../components/HeroWithImage"
import hero from "./hero.jpg"
import PageBodyContent from "../components/PageBodyContent"
import FindSupportForm from "../components/FindSupportForm"

const HomePage = () => 
    <Layout>
        <HeroWithImage
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home"
                },
                {
                    label: "Support near you"
                }
            ]}
            headline="Find support near you"
            deck="Answer a few questions to find activities and support groups in your area"
            image={hero}
        />
        <PageBodyContent
            sidebarItems={[
                {
                    label: "Paying for care",
                    href: "/"
                },                
                {
                    label: "Bucks family information service",
                    href: "/"
                },
            ]}
        >
            <FindSupportForm/>
        </PageBodyContent>
    </Layout>

export default HomePage




