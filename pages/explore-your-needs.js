import React from "react"
import Layout from "../components/Layout"
import NeedsExplorerHero from "../components/Hero/NeedsExplorerHero"
import NeedsExplorerQuestions from "../components/NeedsExplorerQuestions"

const ExploreYourNeedsPage = () => {
    return(
        <Layout withUsefulOverlap>
            <NeedsExplorerHero
                title="Find activities, groups and services near you"
                description="Answer a few questions to find activities and support groups in your area"
            />
            <NeedsExplorerQuestions />
        </Layout>
    )
}

export default ExploreYourNeedsPage