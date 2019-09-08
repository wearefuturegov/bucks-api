import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"
import CallToAction from "../components/CallToAction"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const DetailPage = ({
    service
}) => 
    <Layout>
        <HeroWithColor
            headline={service.name || service.parentOrganisation}
            backgroundColor="white"
            deck={service.description}
            category={service.category}
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home",
                },
                {
                    href: "/",
                    label: "Support near you"
                },
                {
                    label: "Service detail"
                }
            ]}
        />

        Blah

        <CallToAction headline="Is anything missing?">
            <p>If there’s anything out of date or missing from this service, you can <Link href={`/feedback?category=amend&serviceId=${service.assetId}`}><a>request it be updated.</a></Link></p>
        </CallToAction>
    </Layout>

DetailPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""
    let res = await fetch(`${baseUrl}/api/services/${query.id}`)
    let service = await res.json()
    return {
        service: service.result
    }
}

export default DetailPage