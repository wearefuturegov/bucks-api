import React from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import NeedsExplorerHero from "../components/Hero/NeedsExplorerHero"
import NeedsExplorerQuestions from "../components/NeedsExplorerQuestions"

const ExploreYourNeedsPage = () => {
    return(
        <Layout withUsefulOverlap>
            <Head>
                <title>Explore your needs | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <NeedsExplorerHero
                title="Find activities, groups and services near you"
                description="Answer a few questions and we'll suggest recommendations in your area"
            />
            <NeedsExplorerQuestions />
        </Layout>
    )
}

export default ExploreYourNeedsPage