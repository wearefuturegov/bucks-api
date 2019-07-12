import Head from "next/head"
import Layout from "../../components/Layout"
import PageHeader from "../../components/PageHeader"
import { useRouter } from "next/router"

const ThanksPage = () => {

    const router = useRouter()

    const { serviceId } = router.query

    let breadcrumbs = [
        {
            title: "Care for adults",
            href: "/"
        },
        {
            title: "Feedback"
        },
    ]

    if(serviceId) breadcrumbs = [
        {
            title: "Care for adults",
            href: "/"
        },
        {
            title: "Service detail",
            href: `/service/${serviceId}`
        },
        {
            title: "Feedback"
        },
    ]

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Thanks for your feedback | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
                moreBottomPadding
                breadcrumbs={breadcrumbs}
                title="Thank you for your feedback"
                lede="If you gave us contact details, we may be in touch."
            />
        </Layout>
    )
}

export default ThanksPage