import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"
import PageBodyContent from "../components/PageBodyContent"
import FeedbackForm from "../components/FeedbackForm"
import { useRouter } from "next/router"
import Head from "next/head"

const FeedbackPage = () => {

    const router = useRouter()
    const {category, serviceId} = router.query

    let title = "Give feedback"
    if(category === "amend") title = "Suggest a change to this service"
    if(category === "new") title = "Suggest a new service"

    let breadcrumbs = [
        {
            href: "https://www.careadvicebuckinghamshire.org/",
            label: "Home"
        },
        {
            label: "Feedback"
        }
    ]

    if(serviceId) breadcrumbs = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: `/service/${serviceId}`,
            label: "Service detail",
        },
        {
            label: "Feedback"
        }
    ]

    return(
        <Layout>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content="Give feedback" />
                <meta property="og:description" content="This is a new website, feedback helps us to improve it." />
            </Head>
            <HeroWithColor
                breadcrumbs={breadcrumbs}
                headline={title}
            />
            <PageBodyContent
                sidebarItems={[
                    {
                        label: "Contact us",
                        href: "https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/"
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
    )
}

export default FeedbackPage




