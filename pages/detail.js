import Layout from "../components/Layout"
import HeroWithColor from "../components/HeroWithColor"
import fetch from "isomorphic-unfetch"

const DetailPage = ({
    service
}) => 
    <Layout>
        <HeroWithColor
            headline={service.name || service.parentOrganisation}
            backgroundColor="white"
            deck={service.description}
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