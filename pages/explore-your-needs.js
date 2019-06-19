import React, {useState} from 'react'
import Layout from '../components/Layout'
import NeedsExplorerHero from '../components/Hero/NeedsExplorerHero'
import NeedsExplorerQuestions from '../components/NeedsExplorerQuestions'

const ExploreYourNeedsPage = () => {
    return(
        <Layout>
            <NeedsExplorerHero
                title="Find people and services near you"
                description="Answer a few questions to find activities and support groups in your area"
                menuItems={[
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1228",
                        text: "Information and advice"
                    },
                    {
                        href: "/recommendations",
                        text: "All services"
                    },
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/Auth",
                        text: "Log in"
                    },
                    {
                        href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1636",
                        text: "Sign up"
                    },
                ]}
                />
            <NeedsExplorerQuestions />
        </Layout>
    )
}

export default ExploreYourNeedsPage