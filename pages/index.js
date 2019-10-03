import Layout from "../components/Layout"
import HeroWithImage from "../components/HeroWithImage"
import hero from "./hero.jpg"
import PageBodyContent from "../components/PageBodyContent"
import FindSupportForm from "../components/FindSupportForm"
import Head from "next/head"

const HomePage = () => 
    <Layout>
        <Head>
            <title>Find support near you | Care and support for adults | Buckinghamshire County Council</title>
            <meta property="og:title" content="Find support near you" />
            <meta property="og:description" content="Answer a few questions to find activities and support groups in your area." />
        </Head>
        <HeroWithImage
            breadcrumbs={[
                {
                    href: "https://www.careadvicebuckinghamshire.org/",
                    label: "Home"
                },
                {
                    label: "Support near you"
                }
            ]}
            headline="Find activities, groups and services near you"
            deck="Answer a few questions to find clubs, activities and support groups in your area."
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
                    href: "https://www.bucksfamilyinfo.org/kb5/buckinghamshire/fsd/home.page"
                },
            ]}
        >
            <FindSupportForm/>
        </PageBodyContent>
    </Layout>

export default HomePage
