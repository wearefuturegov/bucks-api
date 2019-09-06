import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"
import PageBodyContent from "../components/PageBodyContent"
import FeedbackForm from "../components/FeedbackForm"

const HomePage = () => 
    <Layout>
        <HeroWithColor
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home"
                },
                {
                    label: "Feedback"
                }
            ]}
            headline="Give feedback"
        />
        <PageBodyContent
            sidebarItems={[
                {
                    label: "Contact us",
                    href: "https://www.careadvicebuckinghamshire.org/s4s/Home/ContactUs"
                },                
                {
                    label: "Bucks family information service",
                    href: "/"
                },
            ]}
        >
            <FeedbackForm/>
        </PageBodyContent>
    </Layout>

export default HomePage




